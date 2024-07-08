import { Episode } from './Episode'

export type EpisodeList = {
  podcastId: string
  count: string
  episodes: Episode[]
}
