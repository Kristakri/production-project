import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import { Input } from 'shared/ui/Input/Input'

interface LoginFormProps {
  className?: string
}

export const LoginForm = (props: LoginFormProps): JSX.Element => {
  const { className } = props

  const { t } = useTranslation()
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Username')}
        autoFocus={true}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Password')}
      />
      <Button className={cls.loginBtn}>{t('Sing in')}</Button>
    </div>
  )
}
