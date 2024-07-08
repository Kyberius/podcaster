import useTranslation from 'modules/shared/presentation/hooks/useTranslation'
import { Link } from 'react-router-dom'
import { Podcast } from 'modules/podcast/domain/Podcast'
import styles from './PodcastCard.module.scss'
export type PodcastCardParams = {
  podcast: Podcast
  className?: string
}
const PodcastCard = ({ podcast, className }: PodcastCardParams) => {
  const { $t } = useTranslation()
  return (
    <Link to={`/podcast/${podcast.id}`} className={className}>
      <article className={styles.podcastCard}>
        <img
          className={styles.podcastCard__thumbnail}
          src={podcast.thumbnail}
          alt={podcast.title}
        />
        <div className={styles.podcastCard__title}>{podcast.title}</div>
        <div className={styles.podcastCard__author}>
          {$t('podcast.author')}:{podcast.author}
        </div>
      </article>
    </Link>
  )
}

export default PodcastCard
