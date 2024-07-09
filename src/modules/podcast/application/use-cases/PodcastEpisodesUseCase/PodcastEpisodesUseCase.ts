import { Podcast } from 'modules/podcast/domain/Podcast'
import { PODCAST_DETAIL } from 'modules/podcast/infrastructure/endpoints'
import { normalizeEpisodeList } from 'modules/podcast/utils/normalizers/normalizeEpisodeList'
import { IHttpClient } from 'modules/shared/domain/interface/IHttpClient'
import { IUseCase } from 'modules/shared/domain/interface/IUseCase'
import { allOrigins } from 'modules/shared/infrastructure/utils/allOrigins'

export class PodcastEpisodesUseCase implements IUseCase {
  constructor(private httpClient: IHttpClient) {}
  async run(id: Podcast['id']) {
    const result = await this.httpClient.get<any>(
      allOrigins(PODCAST_DETAIL(id)),
    )
    if (result.status.http_code !== 200)
      throw new Error('Error retrieving episodes')
    return normalizeEpisodeList(JSON.parse(result.contents))
  }
}
