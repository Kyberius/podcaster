import { Podcast } from 'modules/podcast/domain/Podcast'
import { Link } from 'react-router-dom'
import useTranslation from 'modules/shared/presentation/hooks/useTranslation'
import styles from './PodcastDatailCard.module.scss'

export type PodcastCardParams = {
  podcast: Podcast
}
const PodcastDetailCard = ({ podcast }: PodcastCardParams) => {
  const { $t } = useTranslation()
  return (
    <article className={styles.podcastDetailCard}>
      <Link to={`/podcast/${podcast.id}`} className={styles.link}>
        <img
          className={styles.podcastDetailCard__thumbnail}
          src={podcast.thumbnail}
          alt={podcast.title}
        />
      </Link>
      <Link to={`/podcast/${podcast.id}`} className={styles.link}>
        <div className={styles.podcastDetailCard__header}>
          <div className={styles.podcastDetailCard__header__title}>
            {podcast.title}
          </div>
          <div className={styles.podcastDetailCard__header__author}>
            {$t('podcastDetail.by')}:{podcast.author}
          </div>
        </div>
      </Link>
      <div className={styles.podcastDetailCard__description}>
        <div className={styles.podcastDetailCard__description__title}>
          {$t('podcastDetail.description')}
        </div>
        {podcast.description}
      </div>
    </article>
  )
}

export default PodcastDetailCard
