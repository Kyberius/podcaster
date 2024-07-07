import { Podcast } from 'modules/podcast/domain/Podcast'
import renderWithRouter from 'modules/shared/utils/tests/renderWithRouter'
import PodcastCard from './PodcastCard'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const mockPodcast: Podcast = {
  id: 'mockid',
  description: 'mockdescription',
  title: 'mocktitle',
  author: 'mockauthor',
  thumbnail: 'http://fake.url/image',
}
describe('podcastCard', () => {
  it('should display with text params', () => {
    renderWithRouter(<PodcastCard podcast={mockPodcast} />)
    expect(screen.getByText(mockPodcast.title)).toBeInTheDocument()
    expect(
      screen.getByText(mockPodcast.author, { exact: false }),
    ).toBeInTheDocument()
  })
  it('should display thumbnail with alt text', () => {
    renderWithRouter(<PodcastCard podcast={mockPodcast} />)
    const image = screen.getByAltText(mockPodcast.title)
    expect(image).toHaveProperty('src', mockPodcast.thumbnail)
  })
  it('should link to podcast page', async () => {
    const { router } = renderWithRouter(
      [
        { path: '/', element: <PodcastCard podcast={mockPodcast} /> },
        { path: `/podcast/${mockPodcast.id}`, element: null },
      ],
      [`/podcast/${mockPodcast.id}`, '/'],
    )

    const user = userEvent.setup()
    const link = screen.getByRole('link')
    user.click(link)
    await waitFor(() => {
      expect(router.state.location.pathname).toBe(`/podcast/${mockPodcast.id}`)
    })
  })
})
