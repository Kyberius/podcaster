import useTranslation from 'modules/shared/utils/hooks/useTranslation'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'

const Header = () => {
  const { $t } = useTranslation()
  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        <Link to='/' className={styles.header__title__link}>
          {$t('header.title')}
        </Link>
      </h1>
    </header>
  )
}

export default Header
