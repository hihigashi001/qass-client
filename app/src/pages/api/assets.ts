import type { NextApiRequest, NextApiResponse } from 'next'
import { IAsset } from '@states/types'
import { assetListData } from './assetsDammyData'

const handler = async (req: NextApiRequest, res: NextApiResponse<IAsset[]>) => {
  await new Promise((resolve) => setTimeout(resolve, 3000))
  res.status(200).json(assetListData)
}

export default handler
