import RootLayout from 'modules/podcast/presentation/layouts/RootLayout/RootLayout'
import HomeScreen from 'modules/podcast/presentation/screens/HomeScreen'
import { createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
    ],
  },
])

export default router
