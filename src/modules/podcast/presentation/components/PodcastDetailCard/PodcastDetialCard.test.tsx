import { Podcast } from 'modules/podcast/domain/Podcast'
import renderWithRouter from 'modules/shared/utils/tests/renderWithRouter'
import PodcastDetailCard from './PodcastDetailCard'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockPodcast: Podcast = {
  id: 'mockid',
  description: 'mockdescription',
  title: 'mocktitle',
  author: 'mockauthor',
  thumbnail: 'http://fake.url/image',
}
describe('PodcastDetailCard', () => {
  it('should display with text params', () => {
    renderWithRouter(<PodcastDetailCard podcast={mockPodcast} />)
    expect(screen.getByText(mockPodcast.title)).toBeInTheDocument()
    expect(
      screen.getByText(mockPodcast.author, { exact: false }),
    ).toBeInTheDocument()
    expect(screen.getByText(mockPodcast.description)).toBeInTheDocument()
  })

  it('should display thumbnail with alt text', () => {
    renderWithRouter(<PodcastDetailCard podcast={mockPodcast} />)
    const image = screen.getByAltText(mockPodcast.title)
    expect(image).toHaveProperty('src', mockPodcast.thumbnail)
  })

  it('should link to podcast page with img', async () => {
    const { router } = renderWithRouter(
      [
        { path: '/', element: <PodcastDetailCard podcast={mockPodcast} /> },
        { path: `/podcast/${mockPodcast.id}`, element: null },
      ],
      [`/podcast/${mockPodcast.id}`, '/'],
    )

    const user = userEvent.setup()
    const link = screen.getByRole('img')
    user.click(link)
    await waitFor(() => {
      expect(router.state.location.pathname).toBe(`/podcast/${mockPodcast.id}`)
    })
  })

  it('should link to podcast page with title', async () => {
    const { router } = renderWithRouter(
      [
        { path: '/', element: <PodcastDetailCard podcast={mockPodcast} /> },
        { path: `/podcast/${mockPodcast.id}`, element: null },
      ],
      [`/podcast/${mockPodcast.id}`, '/'],
    )

    const user = userEvent.setup()
    const link = screen.getByText(mockPodcast.title)
    user.click(link)
    await waitFor(() => {
      expect(router.state.location.pathname).toBe(`/podcast/${mockPodcast.id}`)
    })
  })
})
