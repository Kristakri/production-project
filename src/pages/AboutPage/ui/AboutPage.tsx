import { Counter } from 'entities/Counter'
import { useTranslation } from 'react-i18next'

const AboutPage = (): JSX.Element => {
  const { t } = useTranslation('about')
  return (
    <div>
      <div>{t('About us')}<Counter /></div>
    </div>
  )
}

export default AboutPage
