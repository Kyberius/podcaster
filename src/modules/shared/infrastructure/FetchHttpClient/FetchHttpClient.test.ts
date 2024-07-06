import { FetchHttpClient } from './FetchHttpClient'

const mockFetch = jest.fn()

global.fetch = mockFetch

describe('FetchHttpClient', () => {
  let httpClient: FetchHttpClient
  beforeEach(() => {
    httpClient = new FetchHttpClient()
    mockFetch.mockClear()
  })

  it('should perform GET request', async () => {
    const mockResponse = { data: 'mock' }
    mockFetch.mockResolvedValueOnce({
      ok: true,
      status: 200,
      json: async () => mockResponse,
    })
    const response = await httpClient.get('fake.url/good-request')
    expect(response).toBe(mockResponse)
  })

  it('should fail a request', async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    })
    const responsePromise = httpClient.get('fake.url/bad-request')
    await expect(responsePromise).rejects.toThrow(Error)
  })
})
