import React from 'react'
import { screen, waitFor } from '@testing-library/react'
import Header from './Header'
import renderWithRouter from 'modules/shared/utils/tests/renderWithRouter'
import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('should show header with podcaster title', () => {
    renderWithRouter(<Header />)
    const title = screen.getByText('header.title')
    expect(title).toBeInTheDocument()
  })

  it('should navigate to home screen', async () => {
    const { router } = renderWithRouter(
      [
        { path: '/', element: null },
        { path: '/other', element: <Header /> },
      ],
      ['/', '/other'],
    )
    const user = userEvent.setup()

    user.click(screen.getByRole('link'))
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual('/')
    })
  })
})
