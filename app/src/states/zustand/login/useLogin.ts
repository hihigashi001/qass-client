import create from 'zustand'
import Router from 'next/router'

type Store = {
  username: string
  password: string
  showPassword: boolean
}

type Handlers = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickLogin: (event: React.FormEvent<HTMLFormElement>) => void
  changeShowPassword: () => void
}

const initialState: Store = {
  username: '',
  password: '',
  showPassword: false,
}

const statusStore = create<Store>(() => initialState)

export const useLogin = () => {
  const { username, password, showPassword } = statusStore()

  const useLoginHandlers: Handlers = {
    onChange: (event) => {
      const value = event.target.value
      const name = event.target.name
      statusStore.setState({ [name]: value })
    },
    onClickLogin: (event) => {
      event.preventDefault()
      Router.push('/portal')
    },
    changeShowPassword: () => {
      statusStore.setState({ showPassword: !showPassword })
    },
  }
  return { username, password, showPassword, useLoginHandlers }
}
