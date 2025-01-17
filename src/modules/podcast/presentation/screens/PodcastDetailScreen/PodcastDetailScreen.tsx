import { useAsyncValue } from 'react-router-dom'
import styles from './PodcastDetailScreen.module.scss'
import { PodcastDetail } from 'modules/podcast/domain/PodcastDetail'
import useTranslation from 'modules/shared/presentation/hooks/useTranslation'
import EpisodeTable from 'modules/podcast/presentation/components/EpisodeTable'

const PodcastDetailScreen = () => {
  const { episodes, count } = useAsyncValue() as PodcastDetail

  const { $t } = useTranslation()
  return (
    <div className={styles.podcastDetail}>
      <div className={styles.podcastDetail__count}>
        {$t('podcastDetail.episodes')}: {count}
      </div>
      <div className={styles.podcastDetail__list}>
        <EpisodeTable episodes={episodes} />
      </div>
    </div>
  )
}

export default PodcastDetailScreen
