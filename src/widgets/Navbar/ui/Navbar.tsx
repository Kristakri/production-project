import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import cls from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar = ({ className }: NavbarProps): JSX.Element => {
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div></div>
      <div className={cls.links}>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>
          {t('Main page')}
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={'/about'}
          className={cls.link}
        >
          {t('About us')}
        </AppLink>
      </div>
    </div>
  )
}
