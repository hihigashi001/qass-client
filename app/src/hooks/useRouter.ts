import Router from 'next/router'

export const useRouter = () => {
  const onClickPortalPage = () => {
    Router.push('/portal')
  }
  const onClickAdminPage = () => {
    Router.push('/admin')
  }
  const onClickloginPage = () => {
    Router.push('/')
  }

  return { onClickPortalPage, onClickAdminPage, onClickloginPage }
}
