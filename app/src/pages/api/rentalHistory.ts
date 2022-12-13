import type { NextApiRequest, NextApiResponse } from 'next'
import { IRentalHistory } from 'src/types'
import { rentalHistoryDammyData } from './rentalHistoryDammyData'
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

const handler = async (req: NextApiRequest, res: NextApiResponse<IRentalHistory[]>) => {
  await runMiddleware(req, res, cors)
  res.status(200).json(rentalHistoryDammyData)
}

export default handler
