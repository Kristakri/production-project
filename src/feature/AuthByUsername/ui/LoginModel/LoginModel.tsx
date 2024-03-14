import { classNames } from 'shared/lib/classNames/classNames'
import cls from './LoginModel.module.scss'
import { Modal } from 'shared/ui/Modal/Modal'
import { Suspense } from 'react'
import { Loader } from 'shared/ui/Loader/Loader'
import { LoginFormAsync } from '../LoginForm/LoginForm.async'

interface LoginModelProps {
  className?: string
  isOpen?: boolean
  onClose: () => void
}

export const LoginModel = (props: LoginModelProps): JSX.Element => {
  const { className, isOpen, onClose } = props
  return (
    <Modal
      className={classNames(cls.LoginModel, {}, [className])}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<Loader />}>
        <LoginFormAsync />
      </Suspense>
    </Modal>
  )
}
