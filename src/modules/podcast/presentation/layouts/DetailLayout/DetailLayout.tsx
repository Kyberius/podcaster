import { Await, Outlet, useAsyncValue, useLoaderData } from 'react-router-dom'
import { PodcastDetail } from 'modules/podcast/domain/Podcast'
import PodcastDetailCard from 'modules/podcast/presentation/components/PodcastDetailCard'
import styles from './DetailLayout.module.scss'

const DetailLayout = () => {
  const { detail } = useAsyncValue() as PodcastDetail
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

const AwaitDetailLayout = () => {
  const { podcast } = useLoaderData() as any

  return (
    <Await resolve={podcast}>
      <DetailLayout />
    </Await>
  )
}

export default AwaitDetailLayout
