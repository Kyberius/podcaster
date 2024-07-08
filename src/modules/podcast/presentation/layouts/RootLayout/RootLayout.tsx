import Header from 'modules/podcast/presentation/components/Header'
import { Outlet } from 'react-router-dom'
import styles from './RootLayout.module.scss'
const RootLayout = () => {
  return (
    <>
      <Header />
      <main className={styles.container}>
        <Outlet />
      </main>
    </>
  )
}

export default RootLayout
