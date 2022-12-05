import { useState } from 'react'
import { Layout } from 'src/pages/_components/portal/layout'
import { useAssets } from 'src/states/useAssets'
import { PortalCard } from 'src/pages/_components/portal/card'
import { SearchBox } from 'src/pages/_components/portal/search'
import { QrScanner } from 'src/pages/_components/portal/ModalQrScanner'
import { Detail } from 'src/pages/_components/portal/ModalDetail'
import { useDetail } from 'src/states/useDetail'


const Portal = () => {
  const { isShowModal, detailData, useDetailHander } = useDetail()
  const { searchFilterData } = useAssets()
  const [isOpenAssetModal, setIsOpenAssetModal] = useState(true)
  const [isOpenUserModal, setIsOpenUserModal] = useState(false)
  const [assetResult, setAssetResult] = useState('')
  const [userResult, setUserResult] = useState('')
  const onClickHandler = () => {


  }

  return (
    <Layout>
      <SearchBox />
      <Detail 
        isOpen={isShowModal}
        setIsOpen={useDetailHander.changeShowModal}
        result={detailData}
      />
      {/* <QrScanner
        isOpen={isOpenAssetModal}
        setIsOpen={setIsOpenAssetModal}
        result={assetResult}
        setResult={setAssetResult}
      /> */}
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
