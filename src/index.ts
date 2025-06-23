export { OPNsenseClient } from './client';
export { HttpClient } from './http-client';

export type { ApiError, ApiResponse, ApiResult, HttpMethod, OPNsenseConfig, RequestOptions } from './types';

export { OPNsenseApiError, ValidationError } from './errors';

export * from './modules';


import { OPNsenseClient } from './client';

export default OPNsenseClient;
