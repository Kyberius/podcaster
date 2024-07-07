import { PodcastListUseCase } from 'modules/podcast/application/use-cases/PodcastListUseCase'
import { FetchHttpClient } from 'modules/shared/infrastructure/FetchHttpClient'
import { useQuery } from 'react-query'

export const PODCAST_LIST_KEY = ['podcasts']

const client = new FetchHttpClient()
const podcastList = new PodcastListUseCase(client)

export const usePodcastList = () =>
  useQuery({
    queryKey: PODCAST_LIST_KEY,
    queryFn: () => podcastList.run(),
  })
