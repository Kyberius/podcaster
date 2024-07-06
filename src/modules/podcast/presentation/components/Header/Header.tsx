import useTranslation from 'modules/shared/utils/hooks/useTranslation'
import { Link } from 'react-router-dom'

const Header = () => {
  const { $t } = useTranslation()
  return (
    <header>
      <Link to='/'>
        <h1>{$t('header.title')}</h1>
      </Link>
    </header>
  )
}

export default Header
