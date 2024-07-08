import { Podcast } from 'modules/podcast/domain/Podcast'
import { PODCAST_DETAIL } from 'modules/podcast/infrastructure/endpoints'
import { normalizeEpisodeList } from 'modules/podcast/utils/normalizers/normalizeEpisodeList'
import { IHttpClient } from 'modules/shared/domain/interface/IHttpClient'
import { IUseCase } from 'modules/shared/domain/interface/IUseCase'

export class PodcastEpisodesUseCase implements IUseCase {
  constructor(private httpClient: IHttpClient) {}
  async run(id: Podcast['id']) {
    const result = await this.httpClient.get<any>(PODCAST_DETAIL(id))
    return normalizeEpisodeList(result)
  }
}
