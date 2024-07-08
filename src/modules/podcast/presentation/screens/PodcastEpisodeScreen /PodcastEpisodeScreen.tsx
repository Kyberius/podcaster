import { useLoaderData } from 'react-router-dom'
import { Episode } from 'modules/podcast/domain/Episode'
import { StyledText } from 'modules/podcast/presentation/components/StyledText'
import styles from './PodcastEpisodeScreen.module.scss'
import { AudioPlayer } from 'modules/podcast/presentation/components/AudioPlayer'

const PodcastEpisodeScreen = () => {
  const episode = useLoaderData() as Episode

  return (
    <div className={styles.podcastEpisode}>
      <h2 className={styles.podcastEpisode__title}>{episode.title}</h2>
      <StyledText className={styles.podcastEpisode__description}>
        {episode.description}
      </StyledText>
      <AudioPlayer
        src={episode.url}
        className={styles.podcastEpisode__player}
      />
    </div>
  )
}

export default PodcastEpisodeScreen
