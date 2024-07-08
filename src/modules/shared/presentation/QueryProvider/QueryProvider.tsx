import { ONE_DAY, SECOND } from 'modules/shared/utils/times'
import { ReactElement } from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { experimental_createPersister } from '@tanstack/query-persist-client-core'
import { LocalStorage } from 'modules/shared/infrastructure/LocalStorage'

const storage = new LocalStorage()
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: SECOND * 30,
      persister: experimental_createPersister({
        storage,
        maxAge: ONE_DAY,
      }),
    },
  },
})

type QueryProviderProps = {
  children: ReactElement
}
const QueryProvider = ({ children }: QueryProviderProps) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryProvider
