#!/usr/bin/env node

import { randomBytes } from 'crypto';
import { fileURLToPath } from 'url';

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
// Crypto types for Wireguard implementation
type Curve25519Point = Float64Array & { readonly length: 16 };
type RandomSource = 'crypto';

interface WireguardKeypair {
  publicKey: string;
  privateKey: string;
}

interface WireguardPresharedKey {
  presharedKey: string;
}

interface WireguardKeys {
  keypair: WireguardKeypair;
  presharedKey: string;
}

const FIELD_SIZE = 16;
const KEY_SIZE = 32;
const BASE64_SIZE = 44;
const PRIME_CONSTANT = 0xffed;
const CURVE_CONSTANT = 0xdb41;

class WireguardCrypto {
  private createField(init?: readonly number[]): Curve25519Point {
    const field = new Float64Array(FIELD_SIZE) as Curve25519Point;

    if (init) {
      const length = Math.min(init.length, FIELD_SIZE);

      for (let i = 0; i < length; i++) {
        const value = init[i];

        if (value !== undefined) {
          field[i] = value;
        }
      }
    }
    return field;
  }

  private packFieldElement(output: Uint8Array, field: Curve25519Point): void {
    const temp = this.createField();
    const modulus = this.createField();

    for (let i = 0; i < FIELD_SIZE; i++) {
      temp[i] = field[i]!;
    }

    this.carryFieldElement(temp);
    this.carryFieldElement(temp);
    this.carryFieldElement(temp);

    for (let j = 0; j < 2; j++) {
      modulus[0] = temp[0]! - PRIME_CONSTANT;

      for (let i = 1; i < 15; i++) {
        modulus[i] = temp[i]! - 0xffff - ((modulus[i - 1]! >> 16) & 1);
        modulus[i - 1]! &= 0xffff;
      }

      modulus[15] = temp[15]! - 0x7fff - ((modulus[14]! >> 16) & 1);

      const bit = (modulus[15]! >> 16) & 1;

      modulus[14]! &= 0xffff;

      this.conditionalSwap(temp, modulus, 1 - bit);
    }

    for (let i = 0; i < FIELD_SIZE; i++) {
      output[2 * i] = temp[i]! & 0xff;
      output[2 * i + 1] = temp[i]! >> 8;
    }
  }

  private carryFieldElement(field: Curve25519Point): void {
    for (let i = 0; i < FIELD_SIZE; i++) {
      const carry = (i < 15 ? 1 : 38) * Math.floor(field[i]! / 65536);

      field[(i + 1) % FIELD_SIZE]! += carry;
      field[i]! &= 0xffff;
    }
  }

  private conditionalSwap(p: Curve25519Point, q: Curve25519Point, condition: number): void {
    const mask = ~(condition - 1);

    for (let i = 0; i < FIELD_SIZE; i++) {
      const temp = mask & (p[i]! ^ q[i]!);

      p[i]! ^= temp;
      q[i]! ^= temp;
    }
  }

  private addFieldElements(result: Curve25519Point, a: Curve25519Point, b: Curve25519Point): void {
    for (let i = 0; i < FIELD_SIZE; i++) {
      result[i] = (a[i]! + b[i]!) | 0;
    }
  }

  private subtractFieldElements(result: Curve25519Point, a: Curve25519Point, b: Curve25519Point): void {
    for (let i = 0; i < FIELD_SIZE; i++) {
      result[i] = (a[i]! - b[i]!) | 0;
    }
  }

  private multiplyFieldElements(result: Curve25519Point, a: Curve25519Point, b: Curve25519Point): void {
    const temp = new Float64Array(31);

    for (let i = 0; i < FIELD_SIZE; i++) {
      for (let j = 0; j < FIELD_SIZE; j++) {
        temp[i + j]! += a[i]! * b[j]!;
      }
    }

    for (let i = 0; i < 15; i++) {
      temp[i]! += 38 * temp[i + FIELD_SIZE]!;
    }

    for (let i = 0; i < FIELD_SIZE; i++) {
      result[i] = temp[i]!;
    }

    this.carryFieldElement(result);
    this.carryFieldElement(result);
  }

  private invertFieldElement(result: Curve25519Point, input: Curve25519Point): void {
    const temp = this.createField();

    for (let i = 0; i < FIELD_SIZE; i++) {
      temp[i] = input[i]!;
    }

    for (let exp = 253; exp >= 0; exp--) {
      this.multiplyFieldElements(temp, temp, temp);

      if (exp !== 2 && exp !== 4) {
        this.multiplyFieldElements(temp, temp, input);
      }
    }

    for (let i = 0; i < FIELD_SIZE; i++) {
      result[i] = temp[i]!;
    }
  }

  private clampPrivateKey(key: Uint8Array): void {
    if (key.length !== KEY_SIZE) {
      throw new Error(`Private key must be ${KEY_SIZE} bytes`);
    }

    key[31] = (key[31]! & 127) | 64;
    key[0]! &= 248;
  }

  private computePublicKey(privateKey: Uint8Array): Uint8Array {
    if (privateKey.length !== KEY_SIZE) {
      throw new Error(`Private key must be ${KEY_SIZE} bytes`);
    }

    const publicKey = new Uint8Array(KEY_SIZE);
    const clamped = new Uint8Array(privateKey);

    this.clampPrivateKey(clamped);

    const a = this.createField([1]);
    const b = this.createField([9]);
    const c = this.createField();
    const d = this.createField([1]);
    const e = this.createField();
    const f = this.createField();
    const curve121665 = this.createField([CURVE_CONSTANT, 1]);
    const basePoint = this.createField([9]);

    for (let bit = 254; bit >= 0; bit--) {
      const keyBit = (clamped[bit >>> 3]! >>> (bit & 7)) & 1;

      this.conditionalSwap(a, b, keyBit);
      this.conditionalSwap(c, d, keyBit);

      this.addFieldElements(e, a, c);
      this.subtractFieldElements(a, a, c);
      this.addFieldElements(c, b, d);
      this.subtractFieldElements(b, b, d);

      this.multiplyFieldElements(d, e, e);
      this.multiplyFieldElements(f, a, a);
      this.multiplyFieldElements(a, c, a);
      this.multiplyFieldElements(c, b, e);

      this.addFieldElements(e, a, c);
      this.subtractFieldElements(a, a, c);
      this.multiplyFieldElements(b, a, a);
      this.subtractFieldElements(c, d, f);

      this.multiplyFieldElements(a, c, curve121665);
      this.addFieldElements(a, a, d);
      this.multiplyFieldElements(c, c, a);
      this.multiplyFieldElements(a, d, f);
      this.multiplyFieldElements(d, b, basePoint);
      this.multiplyFieldElements(b, e, e);

      this.conditionalSwap(a, b, keyBit);
      this.conditionalSwap(c, d, keyBit);
    }

    this.invertFieldElement(c, c);
    this.multiplyFieldElements(a, a, c);
    this.packFieldElement(publicKey, a);

    return publicKey;
  }

  private generateRandomBytes(): Uint8Array {
    return new Uint8Array(randomBytes(KEY_SIZE));
  }

  private generatePrivateKey(): Uint8Array {
    const privateKey = this.generateRandomBytes();

    this.clampPrivateKey(privateKey);

    return privateKey;
  }

  private encodeBase64Chunk(destination: Uint8Array, source: Uint8Array): void {
    if (destination.length < 4 || source.length < 3) {
      throw new Error('Invalid buffer sizes for Base64 encoding');
    }

    const input = Uint8Array.from([
      (source[0]! >> 2) & 63,
      ((source[0]! << 4) | (source[1]! >> 4)) & 63,
      ((source[1]! << 2) | (source[2]! >> 6)) & 63,
      source[2]! & 63,
    ]);

    for (let i = 0; i < 4; i++) {
      const char = input[i]!;

      destination[i] =
        char +
        65 +
        (((25 - char) >> 8) & 6) -
        (((51 - char) >> 8) & 75) -
        (((61 - char) >> 8) & 15) +
        (((62 - char) >> 8) & 3);
    }
  }

  private encodeKeyToBase64(key: Uint8Array): string {
    if (key.length !== KEY_SIZE) {
      throw new Error(`Key must be ${KEY_SIZE} bytes`);
    }

    const base64 = new Uint8Array(BASE64_SIZE);
    const chunkCount = Math.floor(KEY_SIZE / 3);

    for (let i = 0; i < chunkCount; i++) {
      this.encodeBase64Chunk(base64.subarray(i * 4), key.subarray(i * 3));
    }

    const remainingBytes = Uint8Array.from([key[chunkCount * 3] || 0, key[chunkCount * 3 + 1] || 0, 0]);

    this.encodeBase64Chunk(base64.subarray(chunkCount * 4), remainingBytes);

    base64[BASE64_SIZE - 1] = 61;

    return String.fromCharCode(...base64);
  }

  public generateKeypair(): WireguardKeypair {
    const privateKey = this.generatePrivateKey();
    const publicKey = this.computePublicKey(privateKey);

    return {
      publicKey: this.encodeKeyToBase64(publicKey),
      privateKey: this.encodeKeyToBase64(privateKey),
    };
  }

  public generatePresharedKey(): WireguardPresharedKey {
    const presharedKey = this.generateRandomBytes();

    return {
      presharedKey: this.encodeKeyToBase64(presharedKey),
    };
  }

  public generatePresharedKeyString(): string {
    return this.generatePresharedKey().presharedKey;
  }

  public generateKeys(): WireguardKeys {
    const keypair = this.generateKeypair();
    const presharedKey = this.generatePresharedKeyString();

    return {
      keypair,
      presharedKey,
    };
  }

  public getRandomSource(): RandomSource {
    return 'crypto';
  }

  public static validateBase64Key(key: string): boolean {
    return (
      typeof key === 'string' && key.length === BASE64_SIZE && key.endsWith('=') && /^[A-Za-z0-9+/]{43}=$/.test(key)
    );
  }

  public static validateKeypair(keypair: WireguardKeypair): boolean {
    return (
      typeof keypair === 'object' &&
      keypair !== null &&
      this.validateBase64Key(keypair.publicKey) &&
      this.validateBase64Key(keypair.privateKey)
    );
  }
}

const printUsage = (): void => {
  console.log('Usage: bun src/utils/keygen.ts [command]');
  console.log('');
  console.log('Commands:');
  console.log('  keypair    Generate a Wireguard keypair (public and private keys)');
  console.log('  preshared  Generate a Wireguard preshared key');
  console.log('  keys       Generate all keys (keypair + preshared key)');
  console.log('  validate   Validate a Base64-encoded Wireguard key');
  console.log('  help       Show this help message');
  console.log('');
  console.log('Examples:');
  console.log('  bun src/utils/keygen.ts keypair');
  console.log('  bun src/utils/keygen.ts preshared');
  console.log('  bun src/utils/keygen.ts keys');
  console.log('  echo "KwSMLdpVKmjtJ/EsL3aAm3d7VA3mzpB5yHlnXnVwBWw=" | bun src/utils/keygen.ts validate');
};

const handleValidateCommand = (args: string[]): void => {
  if (args[1]) {
    // Direct argument provided
    const input = args[1];
    const isValid = WireguardCrypto.validateBase64Key(input);
    console.log(JSON.stringify({ valid: isValid, key: input }, null, 2));
    return;
  }

  // For stdin input, we need to handle it synchronously
  if (!process.stdin.isTTY) {
    console.error('Error: stdin input not supported in this build environment');
    console.error('Usage: node dist/keygen.cjs validate "key"');
    console.error('Please provide the key as a command line argument');
    process.exit(1);
  }

  console.error('Error: No key provided for validation');
  console.error('Usage: node dist/keygen.cjs validate "key"');
  process.exit(1);
};

const main = (): void => {
  const crypto = new WireguardCrypto();
  const args = process.argv.slice(2);
  const command = args[0];

  if (!command || command === 'help') {
    printUsage();
    return;
  }

  try {
    switch (command) {
      case 'keypair': {
        const keypair = crypto.generateKeypair();
        console.log(JSON.stringify(keypair, null, 2));
        break;
      }

      case 'preshared': {
        const presharedKey = crypto.generatePresharedKey();
        console.log(JSON.stringify(presharedKey, null, 2));
        break;
      }

      case 'keys': {
        const keys = crypto.generateKeys();
        console.log(JSON.stringify(keys, null, 2));
        break;
      }

      case 'validate': {
        handleValidateCommand(args);
        break;
      }

      default:
        console.error(`Error: Unknown command "${command}"`);
        console.error('');
        printUsage();
        process.exit(1);
    }
  } catch (error) {
    console.error(`Error: ${error instanceof Error ? error.message : String(error)}`);
    process.exit(1);
  }
};

const __filename = fileURLToPath(import.meta.url);
const isMainModule = process.argv[1] === __filename;

if (isMainModule) {
  try {
    main();
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

export { WireguardCrypto };
export type { RandomSource, WireguardKeypair, WireguardKeys, WireguardPresharedKey };

// Type definitions for Keygen module

export interface KeygenKeypairRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeygenKeypairResponse {
  result?: string;
  status?: string;
  message?: string;
  publicKey?: string;
  privateKey?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeygenPresharedRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeygenPresharedResponse {
  result?: string;
  status?: string;
  message?: string;
  presharedKey?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeygenKeysRequest {
  [key: string]: any; // TODO: Define specific fields
}

export interface KeygenKeysResponse {
  result?: string;
  status?: string;
  message?: string;
  keypair?: {
    publicKey: string;
    privateKey: string;
  };
  presharedKey?: string;
  [key: string]: any; // TODO: Define specific response fields
}

export interface KeygenValidateRequest {
  key: string;
}

export interface KeygenValidateResponse {
  result?: string;
  status?: string;
  message?: string;
  valid?: boolean;
  key?: string;
  [key: string]: any; // TODO: Define specific response fields
}

// Container types
export interface KeygenWireguardKeypair {
  publicKey: string;
  privateKey: string;
}

export interface KeygenWireguardPresharedKey {
  presharedKey: string;
}

export interface KeygenWireguardKeys {
  keypair: KeygenWireguardKeypair;
  presharedKey: string;
}

export type KeygenRandomSource = 'crypto';

export class KeygenApi {
  private client: AxiosInstance;
  private basePath: string;

  constructor(client: AxiosInstance) {
    this.client = client;
    this.basePath = '/api/keygen';
  }

  // Keygen methods
  async keypair(
    data?: KeygenKeypairRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<KeygenKeypairResponse>> {
    return this.client.post(`${this.basePath}/keypair`, data, config);
  }

  async preshared(
    data?: KeygenPresharedRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<KeygenPresharedResponse>> {
    return this.client.post(`${this.basePath}/preshared`, data, config);
  }

  async keys(data?: KeygenKeysRequest, config?: AxiosRequestConfig): Promise<AxiosResponse<KeygenKeysResponse>> {
    return this.client.post(`${this.basePath}/keys`, data, config);
  }

  async validate(
    data: KeygenValidateRequest,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<KeygenValidateResponse>> {
    return this.client.post(`${this.basePath}/validate`, data, config);
  }
}
