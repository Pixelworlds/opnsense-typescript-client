/**
 * OPNsense API TypeScript SDK
 *
 * A comprehensive TypeScript SDK for interacting with the OPNsense API.
 * Works in both browser and Node.js environments.
 *
 * @example
 * ```typescript
 * import { OPNsenseClient } from 'opnsense-api-ts-sdk';
 *
 * const client = new OPNsenseClient({
 *   baseUrl: 'https://192.168.1.1',
 *   apiKey: 'your-api-key',
 *   apiSecret: 'your-api-secret',
 *   verifySsl: false, // for self-signed certificates
 *   debug: true
 * });
 *
 * // Get system status
 * const status = await client.system.getStatus();
 *
 * // Search firewall rules
 * const rules = await client.firewall.searchRules({ searchPhrase: 'ssh' });
 *
 * // Add firewall alias entry
 * await client.firewall.aliases.add('my_alias', { address: '192.168.1.100' });
 * ```
 */

// Core exports
export { OPNsenseClient } from './client';
export { HttpClient } from './http-client';

// Type exports
export type { ApiError, ApiResponse, ApiResult, HttpMethod, OPNsenseConfig, RequestOptions } from './types';

// Error exports
export { OPNsenseApiError, ValidationError } from './errors';

// Module exports for advanced users
export * from './modules';

// Default export for convenience
import { OPNsenseClient } from './client';

export default OPNsenseClient;
