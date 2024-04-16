import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from '../Button/Button'
import cls from './LangSwitcher.module.scss'
import { memo } from 'react'

interface LangSwitcherProps {
  className?: string
  short: boolean
}

export const LangSwitcher = memo(({ className, short }: LangSwitcherProps): JSX.Element => {
  const { t, i18n } = useTranslation()
  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
    <Button
      className={classNames(cls.LangSwitcher, {}, [className])}
      onClick={toggle}
      theme={ButtonTheme.CLEAR}
    >
      {short ? t('Short Lang') : t('Language')}
    </Button>
  )
})
