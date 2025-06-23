import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class TftpModule extends BaseModule {
  async getStatus(): Promise<ApiResponse<any>> {
    return this.serviceAction('tftpd', 'status');
  }

  async start(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tftpd', 'start');
  }

  async stop(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tftpd', 'stop');
  }

  async restart(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tftpd', 'restart');
  }

  async reconfigure(): Promise<ApiResponse<ApiResult>> {
    return this.serviceAction('tftpd', 'reconfigure');
  }

  async getGeneral(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tftp/general/get');
  }

  async setGeneral(config: Record<string, any>): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tftp/general/set', config);
  }

  async getFiles(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tftp/service/files');
  }

  async uploadFile(fileData: FormData): Promise<ApiResponse<ApiResult>> {
    return this.http.post('/api/tftp/service/upload', fileData);
  }

  async deleteFile(filename: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/tftp/service/delete/${filename}`);
  }

  async getFileInfo(filename: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/tftp/service/file_info/${filename}`);
  }

  async getStatistics(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tftp/service/statistics');
  }

  async getConnections(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tftp/service/connections');
  }

  async getLogs(): Promise<ApiResponse<any>> {
    return this.http.get('/api/tftp/service/logs');
  }
}
