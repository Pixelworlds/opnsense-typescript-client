import { BaseModule } from '../base';

import type { ApiResponse, ApiResult } from '../../types';

export class BackupModule extends BaseModule {
  async getProviders(): Promise<ApiResponse<any>> {
    return this.http.get('/api/core/backup/providers');
  }

  async getBackups(host: string): Promise<ApiResponse<any>> {
    return this.http.get(`/api/core/backup/backups/${host}`);
  }

  async download(host?: string, backup?: string): Promise<ApiResponse<any>> {
    let path = '/api/core/backup/download';
    if (host) {
      path += `/${host}`;
      if (backup) {
        path += `/${backup}`;
      }
    }
    return this.http.get(path);
  }

  async deleteBackup(backup: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/backup/delete_backup/${backup}`);
  }

  async revertBackup(backup: string): Promise<ApiResponse<ApiResult>> {
    return this.http.post(`/api/core/backup/revert_backup/${backup}`);
  }

  async diffBackups(host: string, backup1: string, backup2: string): Promise<ApiResponse<any>> {
    return this.http.post(`/api/core/backup/diff/${host}/${backup1}/${backup2}`);
  }
}
