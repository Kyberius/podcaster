export interface HttpClientOptions {
  headers?: { [key: string]: string }
}

export interface IHttpClient {
  get<T>(url: string, options?: HttpClientOptions): Promise<T>
}
