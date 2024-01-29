import { BugButton } from 'app/providers/ErrorBoundary'
import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main')
  return <div>{t('Main page')} <BugButton /></div>
}

export default MainPage
