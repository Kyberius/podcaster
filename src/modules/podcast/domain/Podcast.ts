import { Episode } from './Episode'

export type Podcast = {
  id: string
  title: string
  description: string
  thumbnail: string
  author: string
}

export type PodcastDetail = Podcast & { episodes: Episode[] }
