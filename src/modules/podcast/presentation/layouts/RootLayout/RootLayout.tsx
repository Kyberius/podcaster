import Header from 'modules/podcast/presentation/components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default RootLayout
