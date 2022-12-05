import { useState } from 'react'
import { Layout } from 'src/pages/_components/portal/layout'
import { useAssets } from 'src/states/useAssets'
import { PortalCard } from 'src/pages/_components/portal/card'
import { SearchBox } from 'src/pages/_components/portal/search'
import { QrScanner } from 'src/pages/_components/portal/qrScanner'


const Portal = () => {
  const { searchFilterData } = useAssets()
  const [isOpenAssetModal, setIsOpenAssetModal] = useState(false)
  const [isOpenUserModal, setIsOpenUserModal] = useState(false)
  const [assetResult, setAssetResult] = useState('')
  const [userResult, setUserResult] = useState('')


  return (
    <Layout>
      <SearchBox />
      <QrScanner
        isOpen={isOpenAssetModal}
        setIsOpen={setIsOpenAssetModal}
        result={assetResult}
        setResult={setAssetResult}
      />
      <QrScanner
        isOpen={isOpenUserModal}
        setIsOpen={setIsOpenUserModal}
        result={userResult}
        setResult={setUserResult}
      />
      <PortalCard assetList={searchFilterData} />
    </Layout>
  )
}

export default Portal
