import QueryProvider from 'modules/shared/presentation/QueryProvider/QueryProvider'
import { RouterProvider } from 'react-router-dom'
import router from 'router'

const App = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  )
}

export default App
