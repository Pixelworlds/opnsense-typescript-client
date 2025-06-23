export interface WireguardKeypair {
  publicKey: string;
  privateKey: string;
}

export interface WireguardPresharedKey {
  presharedKey: string;
}

export interface WireguardKeys {
  keypair: WireguardKeypair;
  presharedKey: string;
}

export type Curve25519Point = Float64Array & {
  readonly length: 16;
};

export interface WireguardCryptoConfig {
  // Reserved for future configuration options
}

export type RandomSource = 'crypto';

export interface Base64EncodingState {
  readonly input: Uint8Array;
  readonly output: Uint8Array;
  readonly position: number;
}
