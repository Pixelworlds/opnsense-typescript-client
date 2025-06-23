import type { ApiResponse } from '../types';
import type { HttpClient } from '../http-client';

export abstract class BaseModule {
  protected http: HttpClient;

  constructor(httpClient: HttpClient) {
    this.http = httpClient;
  }

  protected async search<T = any>(path: string, searchParams: Record<string, any> = {}): Promise<ApiResponse<T>> {
    const defaultParams = {
      current: 1,
      rowCount: 100,
      sort: {},
      searchPhrase: '',
    };

    return this.http.post<T>(path, { ...defaultParams, ...searchParams });
  }

  protected async toggle(path: string, uuid: string, enabled?: boolean): Promise<ApiResponse<any>> {
    const togglePath = enabled !== undefined ? `${path}/${uuid}/${enabled ? '1' : '0'}` : `${path}/${uuid}`;

    return this.http.post(togglePath);
  }

  protected async serviceAction(
    module: string,
    action: 'start' | 'stop' | 'restart' | 'reconfigure' | 'status'
  ): Promise<ApiResponse<any>> {
    const method = action === 'status' ? 'GET' : 'POST';
    const path = `/api/${module}/service/${action}`;

    return method === 'GET' ? this.http.get(path) : this.http.post(path);
  }
}
