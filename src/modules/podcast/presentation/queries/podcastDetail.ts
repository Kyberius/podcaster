import { PodcastEpisodesUseCase } from 'modules/podcast/application/use-cases/PodcastEpisodesUseCase'
import { FetchHttpClient } from 'modules/shared/infrastructure/FetchHttpClient'
import { queryClient } from 'modules/shared/presentation/QueryProvider/QueryProvider'
import { ONE_DAY } from 'modules/shared/utils/times'
import { useQuery } from '@tanstack/react-query'
import { podcastListLoader } from './podcastList'
import { Podcast } from 'modules/podcast/domain/Podcast'

export const PODCAST_DETAIL = (id: string) => ['podcast', id]

const client = new FetchHttpClient()
const podcastEpisodes = new PodcastEpisodesUseCase(client)

async function findPodcastDetail(id: Podcast['id']): Promise<Podcast> {
  const podcasts = await podcastListLoader()
  const podcast = podcasts.find((podcast) => podcast.id === id)
  if (!podcast) throw new Error('podcast not found')
  return podcast
}

const getQuery = (id: string) => ({
  queryKey: PODCAST_DETAIL(id),
  queryFn: async () => ({
    detail: await findPodcastDetail(id),
    ...(await podcastEpisodes.run(id)),
  }),
  staleTime: ONE_DAY,
  enable: id,
})

export const podcastDetailLoader = (id: string) =>
  queryClient.fetchQuery(getQuery(id))

export const usePodcastDetail = (id: string) => useQuery(getQuery(id))
