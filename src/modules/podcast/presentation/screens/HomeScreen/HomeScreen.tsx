import PodcastCard from '../../components/PodcastCard'
import { usePodcastList } from '../../queries/usePodcastList'
import styles from './HomeScreen.module.scss'

const HomeScreen = () => {
  const { data, isLoading, isError } = usePodcastList()
  console.log(data)
  return (
    <main className={styles.container}>
      <section className={styles.podcasts}>
        {data?.map((podcast) => (
          <PodcastCard podcast={podcast} className={styles.podcasts__podcast} />
        ))}
      </section>
    </main>
  )
}

export default HomeScreen
