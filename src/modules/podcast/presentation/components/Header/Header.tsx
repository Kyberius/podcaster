import useTranslation from 'modules/shared/presentation/hooks/useTranslation'
import { useIsFetching } from '@tanstack/react-query'
import { Link, useNavigation } from 'react-router-dom'
import styles from './Header.module.scss'
import loading from 'modules/podcast/presentation/assets/loading.svg'

const Header = () => {
  const { $t } = useTranslation()
  const { state } = useNavigation()
  const isFetching = useIsFetching()
  const isLoading = state === 'loading' || isFetching > 0

  return (
    <header className={styles.header}>
      <h1 className={styles.header__title}>
        <Link to='/' className={styles.header__title__link}>
          {$t('header.title')}
        </Link>
      </h1>
      {isLoading && (
        <img className={styles.header__loading} src={loading} alt='loading' />
      )}
    </header>
  )
}

export default Header
