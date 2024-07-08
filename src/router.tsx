import DetailLayout from 'modules/podcast/presentation/layouts/DetailLayout'
import RootLayout from 'modules/podcast/presentation/layouts/RootLayout'
import { podcastDetailLoader } from 'modules/podcast/presentation/queries/podcastDetail'
import { podcastEpisodeLoader } from 'modules/podcast/presentation/queries/podcastEpisode'
import { podcastListLoader } from 'modules/podcast/presentation/queries/podcastList'
import HomeScreen from 'modules/podcast/presentation/screens/HomeScreen'
import PodcastDetailScreen from 'modules/podcast/presentation/screens/PodcastDetailScreen'
import PodcastEpisodeScreen from 'modules/podcast/presentation/screens/PodcastEpisodeScreen '
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        loader: async () => podcastListLoader(),
        element: <HomeScreen />,
      },
      {
        path: '/podcast/:podcastId',
        element: <DetailLayout />,
        id: 'detail',
        loader: async ({ params }) => podcastDetailLoader(params.podcastId!),
        children: [
          {
            path: '',
            element: <PodcastDetailScreen />,
          },
          {
            path: 'episode/:episodeId',
            loader: ({ params }) =>
              podcastEpisodeLoader(params.podcastId!, params.episodeId!),
            element: <PodcastEpisodeScreen />,
          },
        ],
      },
    ],
  },
])

export default router
