import { defer } from 'react-router-dom'
import { Podcast } from 'modules/podcast/domain/Podcast'
import { Episode } from 'modules/podcast/domain/Episode'
import { podcastDetaiQuery } from './podcastDetail'

export const podcastEpisodeQuery = async (
  podcastId: Podcast['id'],
  episodeId: Episode['id'],
) => {
  const { episodes } = await podcastDetaiQuery(podcastId)
  const episode = episodes.find((episode) => episode.id === episodeId)
  if (!episode) throw new Error('podcast not found')

  return episode
}

export const podcastEpisodeLoader = (
  podcastId: Podcast['id'],
  episodeId: Episode['id'],
) => defer({ episode: podcastEpisodeQuery(podcastId, episodeId) })
