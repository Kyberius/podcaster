import renderWithRouter from 'modules/shared/utils/tests/renderWithRouter'
import EpisodeRow from './EpisodeRow'
import userEvent from '@testing-library/user-event'
import { screen, waitFor } from '@testing-library/react'

const episodeMock = {
  id: 1,
  title: 'title',
  releaseDate: new Date(),
  duration: new Date(),
} as any

describe('EpisodeTable', () => {
  it('should link to episode detail', async () => {
    const { router } = renderWithRouter(
      [
        {
          path: '/',
          element: (
            <table>
              <tbody>
                <EpisodeRow episode={episodeMock} />
              </tbody>
            </table>
          ),
        },
        { path: '/episode/:id', element: null },
      ],
      [`/episode/${episodeMock.id}`, '/'],
    )
    const user = userEvent.setup()
    user.click(screen.getByText(episodeMock.title))
    await waitFor(() => {
      expect(router.state.location.pathname).toEqual(
        `/episode/${episodeMock.id}`,
      )
    })
  })
})
