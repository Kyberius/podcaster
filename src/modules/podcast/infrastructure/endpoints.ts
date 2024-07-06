import { Podcast } from 'modules/podcast/domain/Podcast'

export const BASE_URL = 'https://itunes.apple.com'
export const PODCAST_LIST = `${BASE_URL}/us/rss/toppodcasts/limit=100/genre=1310/json`
export const PODCAST_DETAIL = (id: Podcast['id']) =>
  `${BASE_URL}/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
