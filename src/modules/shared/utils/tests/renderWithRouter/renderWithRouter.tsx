import { render } from '@testing-library/react'
import { ReactElement } from 'react'
import {
  createMemoryRouter,
  RouteObject,
  RouterProvider,
} from 'react-router-dom'

export default function renderWithRouter(
  routes: ReactElement | RouteObject[],
  initialEntries: string[] = ['/'],
) {
  const router = createMemoryRouter(
    Array.isArray(routes)
      ? routes
      : [{ path: initialEntries[initialEntries.length - 1], element: routes }],
    {
      initialEntries: initialEntries,
      initialIndex: initialEntries.length - 1,
    },
  )
  const view = render(<RouterProvider router={router} />)

  return { ...view, router }
}
