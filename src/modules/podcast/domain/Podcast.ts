import { EpisodeList } from './EpisodeList'

export type Podcast = {
  id: string
  title: string
  description: string
  thumbnail: string
  author: string
}

export type PodcastDetail = EpisodeList & { detail: Podcast }
