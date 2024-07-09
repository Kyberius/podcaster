import { PodcastListUseCase } from 'modules/podcast/application/use-cases/PodcastListUseCase'
import { FetchHttpClient } from 'modules/shared/infrastructure/FetchHttpClient'
import { queryClient } from 'modules/shared/presentation/QueryProvider/QueryProvider'
import { ONE_DAY } from 'modules/shared/utils/times'
import { defer } from 'react-router-dom'

export const PODCAST_LIST_KEY = ['podcasts']

const client = new FetchHttpClient()
const podcastList = new PodcastListUseCase(client)

const query = {
  queryKey: PODCAST_LIST_KEY,
  queryFn: () => podcastList.run(),
  staleTime: ONE_DAY,
}

export const podcastListQuery = () => queryClient.fetchQuery(query)

export const podcastListLoader = () => defer({ list: podcastListQuery() })
