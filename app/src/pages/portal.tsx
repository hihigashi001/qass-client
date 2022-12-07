import { Layout } from '@components/portal/layout'
import { PortalCard } from '@components/portal/card'
import { SearchBox } from '@components/portal/search'
import { RentalForm } from '@components/portal/rentalForm'
import { QrScanner } from '@components/portal/modalQrScanner'
import { Detail } from '@components/portal/modalDetail'

const Portal = () => {
  return (
    <Layout>
      <SearchBox />
      <RentalForm />
      <Detail />
      <QrScanner />
      <PortalCard />
    </Layout>
  )
}

export default Portal
