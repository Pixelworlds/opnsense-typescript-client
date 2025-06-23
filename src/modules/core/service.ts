import { BaseModule } from '../base';

import type { ApiResponse } from '../../types';

export class ServiceModule extends BaseModule {
  override async search(path: string, searchParams: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return super.search(path, searchParams);
  }

  async searchServices(params: Record<string, any> = {}): Promise<ApiResponse<any>> {
    return this.search('/api/core/service/search', params);
  }

  async start(name: string, id?: string): Promise<ApiResponse<any>> {
    const path = id ? `/api/core/service/start/${name}/${id}` : `/api/core/service/start/${name}`;
    return this.http.post(path);
  }

  async stop(name: string, id?: string): Promise<ApiResponse<any>> {
    const path = id ? `/api/core/service/stop/${name}/${id}` : `/api/core/service/stop/${name}`;
    return this.http.post(path);
  }

  async restart(name: string, id?: string): Promise<ApiResponse<any>> {
    const path = id ? `/api/core/service/restart/${name}/${id}` : `/api/core/service/restart/${name}`;
    return this.http.post(path);
  }
}
