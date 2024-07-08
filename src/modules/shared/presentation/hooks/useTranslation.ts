import { useTranslation as useI18Next } from 'react-i18next'

export default function useTranslation() {
  const { t } = useI18Next()
  return { $t: t }
}
