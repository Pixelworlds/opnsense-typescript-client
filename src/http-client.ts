import axios from 'axios';
import type { AxiosInstance, AxiosResponse } from 'axios';
import * as https from 'https';
import type { HttpClient, RequestConfig, ApiResponse, OPNsenseConfig } from './types';

export class OPNsenseHttpClient implements HttpClient {
  private client: AxiosInstance;

  constructor(config: OPNsenseConfig) {
    // Remove trailing slash from baseUrl - individual modules already include /api prefix
    const baseUrl = config.baseUrl.replace(/\/$/, '');
    
    this.client = axios.create({
      baseURL: baseUrl,
      timeout: config.timeout || 30000,
      auth: {
        username: config.apiKey,
        password: config.apiSecret,
      },
      httpsAgent: new https.Agent({
        rejectUnauthorized: config.verifySsl !== false,
      }),
      headers: {
        'Accept': 'application/json',
      },
    });
  }

  async get<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.client.get(url, config);
    return this.transformResponse(response);
  }

  async post<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    const requestConfig = data ? {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    } : config;
    const response: AxiosResponse<T> = await this.client.post(url, data, requestConfig);
    return this.transformResponse(response);
  }

  async put<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    const requestConfig = data ? {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    } : config;
    const response: AxiosResponse<T> = await this.client.put(url, data, requestConfig);
    return this.transformResponse(response);
  }

  async delete<T = any>(url: string, config?: RequestConfig): Promise<ApiResponse<T>> {
    const response: AxiosResponse<T> = await this.client.delete(url, config);
    return this.transformResponse(response);
  }

  async patch<T = any>(url: string, data?: any, config?: RequestConfig): Promise<ApiResponse<T>> {
    const requestConfig = data ? {
      ...config,
      headers: {
        'Content-Type': 'application/json',
        ...config?.headers,
      },
    } : config;
    const response: AxiosResponse<T> = await this.client.patch(url, data, requestConfig);
    return this.transformResponse(response);
  }

  private transformResponse<T>(response: AxiosResponse<T>): ApiResponse<T> {
    return {
      data: response.data,
      status: response.status,
      statusText: response.statusText,
      headers: response.headers as Record<string, string>,
    };
  }
}
