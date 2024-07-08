import { Episode } from 'modules/podcast/domain/Episode'
import useTranslation from 'modules/shared/presentation/hooks/useTranslation'
import EpisodeRow from './EpisodeRow'
import styles from './EpisodeTable.module.scss'
interface EpisodeTableProps {
  episodes: Episode[]
}

const EpisodeTable = ({ episodes }: EpisodeTableProps) => {
  const { $t } = useTranslation()
  return (
    <table className={styles.table}>
      <thead className={styles.table__header}>
        <tr>
          <th className={styles.table__header__title}>
            {$t('episodes.title')}
          </th>
          <th>{$t('episodes.date')}</th>
          <th>{$t('episodes.duration')}</th>
        </tr>
      </thead>
      <tbody className={styles.table__body}>
        {episodes.map((episode) => (
          <EpisodeRow key={episode.id} episode={episode} />
        ))}
      </tbody>
    </table>
  )
}

export default EpisodeTable
