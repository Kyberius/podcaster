import { EpisodeList } from 'modules/podcast/domain/EpisodeList'
import { normalizeEpisode } from './normalizeEpisode'

export function normalizeEpisodeList(rawList: any): EpisodeList {
  const podcast = rawList.results[0]
  const episodes = rawList.results.slice(1).map(normalizeEpisode)
  return {
    podcastId: podcast.id,
    count: podcast.trackCount,
    episodes,
  }
}
