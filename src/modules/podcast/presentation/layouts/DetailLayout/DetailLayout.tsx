import { Outlet, useLoaderData } from 'react-router-dom'
import { Podcast } from 'modules/podcast/domain/Podcast'
import PodcastDetailCard from 'modules/podcast/presentation/components/PodcastDetailCard'
import styles from './DetailLayout.module.scss'

const DetailLayout = () => {
  const { detail } = useLoaderData() as { detail: Podcast }
  return (
    <div className={styles.container} role='group'>
      <aside className={styles.sidepanel}>
        <PodcastDetailCard podcast={detail} />
      </aside>
      <section className={styles.content}>
        <Outlet />
      </section>
    </div>
  )
}

export default DetailLayout
