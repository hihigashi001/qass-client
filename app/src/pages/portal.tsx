import { Layout } from '@components/portal/layout'
import { Header } from '@components/portal/header'
import { SearchBox } from '@components/portal/search'
import { RentalForm } from '@components/portal/rentalForm'
import { Detail } from '@components/portal/modalDetail'
import { QrScannerSearch } from '@components/portal/search/modalQrScanner'
import { QrScannerRentalForm } from '@components/portal/rentalForm/modalQrScanner'
import { PortalCard } from '@components/portal/card'

const Portal = () => {
  return (
    <Layout>
      <Header />
      <SearchBox />
      <RentalForm />
      <Detail />
      <QrScannerSearch />
      <QrScannerRentalForm />
      <PortalCard />
    </Layout>
  )
}

export default Portal