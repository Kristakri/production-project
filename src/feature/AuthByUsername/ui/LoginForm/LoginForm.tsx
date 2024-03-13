import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginForm.module.scss'
import { useTranslation } from 'react-i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text, TextTheme } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { useDispatch, useSelector } from 'react-redux'
import { memo, useCallback } from 'react'
import { loginAction } from 'feature/AuthByUsername/model/slice/loginSlice'
import { getLoginState } from 'feature/AuthByUsername/model/selectors/getLoginState'
import { loginByUsername } from 'feature/AuthByUsername/model/services/loginByUsername/loginByUsername'

interface LoginFormProps {
  className?: string
}

export const LoginForm = memo((props: LoginFormProps): JSX.Element => {
  const { className } = props

  const { t } = useTranslation()
  const dispatch = useDispatch()
  const { username, password, error, isLoading } = useSelector(getLoginState)

  const onChangeUsername = useCallback((value: string) => {
    dispatch(loginAction.setUserName(value))
  }, [dispatch])

  const onChangePassword = useCallback((value: string) => {
    dispatch(loginAction.setPassword(value))
  }, [dispatch])

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }))
  }, [dispatch, username, password])

  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Text title={t('Authorization')} />
      {error && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Username')}
        autoFocus={true}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        className={cls.input}
        type="text"
        placeholder={t('Password')}
        onChange={onChangePassword}
        value={password}
      />
      <Button
        theme={ButtonTheme.OUTLINE}
        className={cls.loginBtn}
        onClick={onLoginClick}
        disabled={isLoading}
      >
        {t('Sing in')}
      </Button>
    </div>
  )
})
