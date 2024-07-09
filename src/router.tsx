import { lazy, Suspense } from 'react'
import RootLayout from 'modules/podcast/presentation/layouts/RootLayout'
import { podcastDetailLoader } from 'modules/podcast/presentation/queries/podcastDetail'
import { podcastEpisodeLoader } from 'modules/podcast/presentation/queries/podcastEpisode'
import { podcastListLoader } from 'modules/podcast/presentation/queries/podcastList'
import { createBrowserRouter } from 'react-router-dom'

const HomeScreen = lazy(
  () => import('modules/podcast/presentation/screens/HomeScreen'),
)
const PodcastDetailScreen = lazy(
  () => import('modules/podcast/presentation/screens/PodcastDetailScreen'),
)
const PodcastEpisodeScreen = lazy(
  () => import('modules/podcast/presentation/screens/PodcastEpisodeScreen '),
)

const DetailLayout = lazy(
  () => import('modules/podcast/presentation/layouts/DetailLayout'),
)

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        loader: async () => podcastListLoader(),
        element: (
          <Suspense>
            <HomeScreen />
          </Suspense>
        ),
      },
      {
        path: '/podcast/:podcastId',
        element: (
          <Suspense>
            <DetailLayout />
          </Suspense>
        ),
        id: 'detail',
        loader: async ({ params }) => podcastDetailLoader(params.podcastId!),
        children: [
          {
            path: '',
            element: (
              <Suspense>
                <PodcastDetailScreen />
              </Suspense>
            ),
          },
          {
            path: 'episode/:episodeId',
            loader: async ({ params }) =>
              podcastEpisodeLoader(params.podcastId!, params.episodeId!),
            element: (
              <Suspense>
                <PodcastEpisodeScreen />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
])

export default router
