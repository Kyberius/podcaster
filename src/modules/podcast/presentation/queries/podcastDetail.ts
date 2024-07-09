import { PodcastEpisodesUseCase } from 'modules/podcast/application/use-cases/PodcastEpisodesUseCase'
import { FetchHttpClient } from 'modules/shared/infrastructure/FetchHttpClient'
import { queryClient } from 'modules/shared/presentation/QueryProvider/QueryProvider'
import { ONE_DAY } from 'modules/shared/utils/times'
import { podcastListQuery } from './podcastList'
import { Podcast } from 'modules/podcast/domain/Podcast'
import { defer } from 'react-router-dom'

export const PODCAST_DETAIL = (id: string) => ['podcast', id]

const client = new FetchHttpClient()
const podcastEpisodes = new PodcastEpisodesUseCase(client)

async function findPodcastDetail(id: Podcast['id']): Promise<Podcast> {
  const podcasts = await podcastListQuery()
  const podcast = podcasts.find((podcast) => podcast.id === id)
  if (!podcast) throw new Error('podcast not found')
  return podcast
}

const getQuery = (id: string) => ({
  queryKey: PODCAST_DETAIL(id),
  queryFn: async () => {
    const [detail, episodeList] = await Promise.all([
      findPodcastDetail(id),
      podcastEpisodes.run(id),
    ])

    return {
      detail: detail,
      ...episodeList,
    }
  },
  staleTime: ONE_DAY,
  enable: id,
})

export const podcastDetaiQuery = (id: string) =>
  queryClient.fetchQuery(getQuery(id))

export const podcastDetailLoader = (id: string) =>
  defer({ podcast: podcastDetaiQuery(id) })
