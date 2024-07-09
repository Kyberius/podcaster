import Header from 'modules/podcast/presentation/components/Header'
import { Outlet, useNavigation } from 'react-router-dom'
import styles from './RootLayout.module.scss'
import { useIsFetching } from '@tanstack/react-query'
const RootLayout = () => {
  const { state } = useNavigation()
  return (
    <>
      <Header />
      <main className={styles.container}>
        {state !== 'loading' && <Outlet />}
      </main>
    </>
  )
}

export default RootLayout
