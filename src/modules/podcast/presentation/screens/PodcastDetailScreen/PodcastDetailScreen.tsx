import { PodcastDetailUseCase } from 'modules/podcast/application/use-cases/PodcastDetailUseCase'
import { FetchHttpClient } from 'modules/shared/infrastructure/FetchHttpClient'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const client = new FetchHttpClient()
const detail = new PodcastDetailUseCase(client)
const PodcastDetailScreen = () => {
  const { id } = useParams()

  useEffect(() => {
    if (id) detail.run(id)
  }, [id])

  return <div>PodcastDetailScreen</div>
}

export default PodcastDetailScreen
