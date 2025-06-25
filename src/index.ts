export { OPNsenseClient } from './client';
export { HttpClient } from './http-client';

export type * from './types';

export { OPNsenseApiError, ValidationError } from './errors';

export { BaseModule } from './modules/base';
export * as CoreModules from './modules/core';
export * as PluginModules from './modules/plugins';
