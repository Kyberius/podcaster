import { Podcast } from 'modules/podcast/domain/Podcast'
import { Episode } from 'modules/podcast/domain/Episode'
import { podcastDetailLoader } from './podcastDetail'

export const podcastEpisodeLoader = async (
  podcastId: Podcast['id'],
  episodeId: Episode['id'],
) => {
  const { episodes } = await podcastDetailLoader(podcastId)
  const episode = episodes.find((episode) => episode.id === episodeId)
  if (!episode) throw new Error('podcast not found')
  console.log('episode', episode)

  return episode
}
