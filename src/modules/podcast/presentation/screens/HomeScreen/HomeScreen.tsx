import { useCallback, useMemo, useState } from 'react'
import { Await, useAsyncValue, useLoaderData } from 'react-router-dom'
import { Podcast } from 'modules/podcast/domain/Podcast'
import useTranslation from 'modules/shared/presentation/hooks/useTranslation'
import useSearch from 'modules/shared/presentation/hooks/useSearch'
import Input from 'modules/shared/presentation/components/Input'
import PodcastCard from 'modules/podcast/presentation/components/PodcastCard'
import styles from './HomeScreen.module.scss'

const HomeScreen = () => {
  const { $t } = useTranslation()
  const podcastList = useAsyncValue() as Podcast[]
  const [searchParam, setSearchParam] = useState<string>('')
  const [found, setSearchTerm] = useSearch<Podcast>(podcastList!, [
    'title',
    'author',
  ])

  const podcasts = useMemo(
    () => (searchParam.length ? found : podcastList) ?? [],
    [podcastList, found, searchParam],
  )

  const handleSearch = useCallback(
    (param: string) => {
      setSearchParam(param)
      setSearchTerm(param)
    },
    [setSearchTerm],
  )

  return (
    <>
      <section className={styles.search}>
        <div className={styles.search__count}>{podcasts.length}</div>
        <Input
          value={searchParam}
          onChange={handleSearch}
          placeholder={$t('home.filter')}
        />
      </section>
      <section className={styles.podcasts}>
        {podcasts?.map((podcast: Podcast) => (
          <PodcastCard
            key={podcast.id}
            podcast={podcast}
            className={styles.podcasts__podcast}
          />
        ))}
      </section>
    </>
  )
}

const AwaitHomeScreen = () => {
  const { list } = useLoaderData() as any
  return (
    <Await resolve={list}>
      <HomeScreen />
    </Await>
  )
}

export default AwaitHomeScreen
