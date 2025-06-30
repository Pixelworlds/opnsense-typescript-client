# WireGuard Key Generation

The OPNsense TypeScript SDK includes a comprehensive WireGuard key generation utility that provides cryptographically secure key generation for WireGuard VPN configurations.

## Overview

The WireGuard key generator implements the Curve25519 elliptic curve cryptography algorithm to generate:

- **Keypairs**: Public/private key pairs for WireGuard peers
- **Preshared Keys**: Additional security layer for WireGuard tunnels
- **Key Validation**: Verification of Base64-encoded WireGuard keys

## Installation

The keygen utility is included with the main SDK package:

```bash
yarn add opnsense-typescript-client
```

## Programmatic Usage

### Basic Example

```typescript
import { WireguardCrypto } from 'opnsense-typescript-client/keygen';

const crypto = new WireguardCrypto();

// Generate a keypair
const keypair = crypto.generateKeypair();
console.log('Public Key:', keypair.publicKey);
console.log('Private Key:', keypair.privateKey);

// Generate a preshared key
const preshared = crypto.generatePresharedKey();
console.log('Preshared Key:', preshared.presharedKey);

// Generate all keys at once
const allKeys = crypto.generateKeys();
console.log('Complete Key Set:', allKeys);
```

### Key Validation

```typescript
import { WireguardCrypto } from 'opnsense-typescript-client/keygen';

const publicKey = 'nShjosyTVASAX4eAWymGyv5Y02Oz17N3WV/F8g3SVwQ=';
const isValid = WireguardCrypto.validateBase64Key(publicKey);
console.log('Key is valid:', isValid); // true

const invalidKey = 'invalid-key';
const isInvalid = WireguardCrypto.validateBase64Key(invalidKey);
console.log('Key is valid:', isInvalid); // false
```

### Complete Example

```typescript
import { WireguardCrypto } from 'opnsense-typescript-client/keygen';

async function setupWireGuardPeer() {
  const crypto = new WireguardCrypto();

  // Generate server keys
  const serverKeys = crypto.generateKeys();

  // Generate client keys
  const clientKeys = crypto.generateKeys();

  // Validate all keys
  const serverValid = WireguardCrypto.validateKeypair(serverKeys.keypair);
  const clientValid = WireguardCrypto.validateKeypair(clientKeys.keypair);

  if (serverValid && clientValid) {
    console.log('WireGuard Configuration:');
    console.log('=========================');
    console.log('Server Private Key:', serverKeys.keypair.privateKey);
    console.log('Server Public Key:', serverKeys.keypair.publicKey);
    console.log('Client Private Key:', clientKeys.keypair.privateKey);
    console.log('Client Public Key:', clientKeys.keypair.publicKey);
    console.log('Preshared Key:', serverKeys.presharedKey);
  }
}

setupWireGuardPeer();
```

## Command Line Usage

The keygen utility can also be used as a standalone command-line tool:

### Generate Keypair

```bash
node dist/keygen.cjs keypair
```

**Example Output:**

```json
{
  "publicKey": "nShjosyTVASAX4eAWymGyv5Y02Oz17N3WV/F8g3SVwQ=",
  "privateKey": "kGsUQw6KRhND0jU+Dni6a9e2uq/O0RIMCSQugJuUTEM="
}
```

### Generate Preshared Key

```bash
node dist/keygen.cjs preshared
```

**Example Output:**

```json
{
  "presharedKey": "Zx7Y2cFBG/N7Di9eSHb2Gqmy1sotl0eF+vvOASjhRTU="
}
```

### Generate All Keys

```bash
node dist/keygen.cjs keys
```

**Example Output:**

```json
{
  "keypair": {
    "publicKey": "l00G1PQHcypIDwNtL81fAO7aPijp0rImS2+oxWJ0jAA=",
    "privateKey": "CLnVuVt3j3i+MSG9siaAQDg5/a/aZzPaMulal0T0pFE="
  },
  "presharedKey": "lieCBMRYQ+JasQNYS8amNFs3Tj9Ge7W31dJ7uIIbako="
}
```

### Validate Keys

```bash
# Via stdin
echo "l00G1PQHcypIDwNtL81fAO7aPijp0rImS2+oxWJ0jAA=" | node dist/keygen.cjs validate

# Via argument
node dist/keygen.cjs validate "l00G1PQHcypIDwNtL81fAO7aPijp0rImS2+oxWJ0jAA="
```

**Example Output:**

```json
{
  "valid": true,
  "key": "l00G1PQHcypIDwNtL81fAO7aPijp0rImS2+oxWJ0jAA="
}
```

### Help

```bash
node dist/keygen.cjs help
```

**Example Output:**

```
Usage: bun src/utils/keygen.ts [command]

Commands:
  keypair    Generate a Wireguard keypair (public and private keys)
  preshared  Generate a Wireguard preshared key
  keys       Generate all keys (keypair + preshared key)
  validate   Validate a Base64-encoded Wireguard key
  help       Show this help message

Examples:
  bun src/utils/keygen.ts keypair
  bun src/utils/keygen.ts preshared
  bun src/utils/keygen.ts keys
  echo "KwSMLdpVKmjtJ/EsL3aAm3d7VA3mzpB5yHlnXnVwBWw=" | bun src/utils/keygen.ts validate
```

## API Reference

### WireguardCrypto Class

#### Methods

##### `generateKeypair(): WireguardKeypair`

Generates a new WireGuard keypair.

**Returns:**

```typescript
{
  publicKey: string; // 44-character Base64 string
  privateKey: string; // 44-character Base64 string
}
```

##### `generatePresharedKey(): WireguardPresharedKey`

Generates a new WireGuard preshared key.

**Returns:**

```typescript
{
  presharedKey: string; // 44-character Base64 string
}
```

##### `generatePresharedKeyString(): string`

Generates a preshared key and returns only the key string.

**Returns:** `string` - 44-character Base64 string

##### `generateKeys(): WireguardKeys`

Generates a complete set of WireGuard keys.

**Returns:**

```typescript
{
  keypair: {
    publicKey: string;
    privateKey: string;
  }
  presharedKey: string;
}
```

##### `getRandomSource(): RandomSource`

Returns the random source used for key generation.

**Returns:** `'crypto'` - Indicates Node.js crypto module is used

#### Static Methods

##### `validateBase64Key(key: string): boolean`

Validates a Base64-encoded WireGuard key.

**Parameters:**

- `key: string` - The key to validate

**Returns:** `boolean` - True if valid, false otherwise

##### `validateKeypair(keypair: WireguardKeypair): boolean`

Validates a WireGuard keypair object.

**Parameters:**

- `keypair: WireguardKeypair` - The keypair to validate

**Returns:** `boolean` - True if valid, false otherwise

## TypeScript Types

```typescript
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

type RandomSource = 'crypto';
```

## Security Features

- **Cryptographically Secure**: Uses Node.js `crypto.randomBytes()` for entropy
- **Curve25519**: Implements the standard WireGuard elliptic curve algorithm
- **Key Clamping**: Automatically applies WireGuard key clamping rules
- **Base64 Encoding**: All keys are properly Base64-encoded per WireGuard specification
- **Validation**: Built-in validation ensures keys meet WireGuard requirements

## Integration with OPNsense

The generated keys can be directly used in OPNsense WireGuard configurations:

1. **Server Configuration**: Use the server private key in OPNsense WireGuard instance
2. **Peer Configuration**: Add client public keys to OPNsense peer configurations
3. **Preshared Keys**: Optional additional security layer for enhanced protection

## Error Handling

```typescript
try {
  const crypto = new WireguardCrypto();
  const keys = crypto.generateKeys();

  if (!WireguardCrypto.validateKeypair(keys.keypair)) {
    throw new Error('Generated keypair validation failed');
  }

  // Use keys...
} catch (error) {
  console.error('Key generation failed:', error.message);
}
```

## Best Practices

1. **Generate Fresh Keys**: Always generate new keys for each peer
2. **Secure Storage**: Store private keys securely and never share them
3. **Validate Keys**: Always validate keys before using them in configurations
4. **Use Preshared Keys**: Consider using preshared keys for additional security
5. **Key Rotation**: Regularly rotate keys for enhanced security

## License

The WireGuard key generation utility is included under the same MIT license as the main SDK package.
