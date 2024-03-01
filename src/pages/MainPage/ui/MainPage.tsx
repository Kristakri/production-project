import { BugButton } from 'app/providers/ErrorBoundary'
import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const MainPage = (): JSX.Element => {
  const { t } = useTranslation('main')
  return <div>
    {t('Main page')}
    <BugButton />
    <Counter />
   </div>
}

export default MainPage
