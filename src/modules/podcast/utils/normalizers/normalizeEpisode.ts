import { Episode } from 'modules/podcast/domain/Episode'
import { RawEpisode } from 'modules/podcast/infrastructure/types/RawEpisode'

export function normalizeEpisode(rawEpisode: RawEpisode): Episode {
  return {
    id: rawEpisode.trackId.toString(),
    title: rawEpisode.trackName,
    description: rawEpisode.description,
    releaseDate: new Date(rawEpisode.releaseDate),
    duration: rawEpisode.trackTimeMillis,
    url: rawEpisode.episodeUrl,
  }
}
