import type { NextApiRequest, NextApiResponse } from 'next'
import { IAsset } from '@states/types'
import { assetListData } from './assetsDammyData'
import Cors from 'cors'

const cors = Cors({
  methods: ['POST', 'GET', 'HEAD'],
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

const handler = async (req: NextApiRequest, res: NextApiResponse<IAsset[]>) => {
  await runMiddleware(req, res, cors)
  res.status(200).json(assetListData)
}

export default handler
