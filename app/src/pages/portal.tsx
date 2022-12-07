import { Layout } from '@components/portal/layout'
import { Header } from '@components/portal/header'
import { SearchBox } from '@components/portal/search'
import { RentalForm } from '@components/portal/rentalForm'
import { Detail } from '@components/portal/modalDetail'
import { QrScanner } from '@components/portal/modalQrScanner'
import { PortalCard } from '@components/portal/card'

const Portal = () => {
  return (
    <Layout>
      <Header />
      <SearchBox />
      <RentalForm />
      <Detail />
      <QrScanner />
      <PortalCard />
    </Layout>
  )
}

export default Portal