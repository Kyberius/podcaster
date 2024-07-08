import { EpisodeList } from './EpisodeList'
import { Podcast } from './Podcast'

export type PodcastDetail = {
  detail: Podcast
  episodes: EpisodeList
}
