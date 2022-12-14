import type { NextApiRequest, NextApiResponse } from 'next'
import { ProductType } from 'src/types'
import { productData } from './assetsDammyData'
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

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<ProductType[]>
) => {
  await runMiddleware(req, res, cors)
  res.status(200).json(productData)
}

export default handler
