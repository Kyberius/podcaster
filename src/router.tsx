import RootLayout from 'modules/podcast/presentation/layouts/RootLayout'
import HomeScreen from 'modules/podcast/presentation/screens/HomeScreen'
import PodcastDetailScreen from 'modules/podcast/presentation/screens/PodcastDetailScreen'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/podcast/:id',
        element: <PodcastDetailScreen />,
      },
    ],
  },
])

export default router
