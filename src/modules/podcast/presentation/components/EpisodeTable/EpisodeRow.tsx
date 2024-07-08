import { Episode } from 'modules/podcast/domain/Episode'
import { format } from 'date-fns'
import { Link } from 'react-router-dom'
import styles from './EpisodeRow.module.scss'

interface EpisodeRowProps {
  episode: Episode
}
const EpisodeRow = ({ episode }: EpisodeRowProps) => {
  return (
    <tr className={styles.episodeRow}>
      <td className={styles.episodeRow__title}>
        <Link to={`episode/${episode.id}`}>{episode.title}</Link>
      </td>
      <td className={styles.episodeRow__date}>
        {format(episode.releaseDate, 'dd/MM/yyyy')}
      </td>
      <td className={styles.episodeRow__duration}>
        {episode?.duration &&
          format(new Date(episode.duration), "h 'h' mm 'm'")}
      </td>
    </tr>
  )
}

export default EpisodeRow
