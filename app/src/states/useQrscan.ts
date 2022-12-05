import { useState } from 'react'

export const useQrscan = () => {
  const [isOpenAsset, setIsOpenAsset] = useState(true)
  const [isOpenUser, setIsOpenUser] = useState(false)
  const [assetResult, setAssetResult] = useState('')
  const [userResult, setUserResult] = useState('')

  return { isOpenAsset, isOpenUser, assetResult, userResult, setIsOpenAsset, setIsOpenUser, setAssetResult, setUserResult }
}
