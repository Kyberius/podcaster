import { EpisodeList } from './EpisodeList'
import { Podcast } from './Podcast'

export type PodcastDetail = EpisodeList & {
  detail: Podcast
}
