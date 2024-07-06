import { PODCAST_LIST } from 'modules/podcast/infrastructure/endpoints'
import { RawPodcast } from 'modules/podcast/infrastructure/types/RawPodcast'
import { normalizePodcast } from 'modules/podcast/utils/normalizers/normalizePodcast'
import { IHttpClient } from 'modules/shared/domain/interface/IHttpClient'
import { IUseCase } from 'modules/shared/domain/interface/IUseCase'

export class PodcastListUseCase implements IUseCase {
  constructor(private httpClient: IHttpClient) {}
  async run() {
    const result = await this.httpClient.get<{
      feed: { entry: RawPodcast[] }
    }>(PODCAST_LIST)
    return result.feed.entry.map(normalizePodcast)
  }
}
