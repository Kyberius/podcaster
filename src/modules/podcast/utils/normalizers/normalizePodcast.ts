import { Podcast } from 'modules/podcast/domain/Podcast'
import { RawPodcast } from 'modules/podcast/infrastructure/types/RawPodcast'

export function normalizePodcast(rawPodcast: RawPodcast): Podcast {
  return {
    id: rawPodcast.id.attributes['im:id'],
    title: rawPodcast['im:name'].label,
    author: rawPodcast['im:artist'].label,
    thumbnail: rawPodcast['im:image'][2].label,
    description: rawPodcast.summary.label,
  }
}
