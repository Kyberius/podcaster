// FetchHttpClient.ts
import {
  HttpClientOptions,
  IHttpClient,
} from 'modules/shared/domain/interface/IHttpClient'

export class FetchHttpClient implements IHttpClient {
  private async request<T>(
    url: string,
    method: 'GET' | 'POST' | 'PUT' | 'DELETE',
    options?: HttpClientOptions,
  ) {
    const response = await fetch(url, { ...options, method })
    return this.handleResponse<T>(response)
  }

  private async handleResponse<T>(response: Response): Promise<T> {
    if (!response.ok) {
      throw new Error(`HTTP error, status: ${response.status}`)
    }
    return response.json()
  }

  async get<T>(url: string, options?: HttpClientOptions): Promise<T> {
    return await this.request(url, 'GET', options)
  }
}
