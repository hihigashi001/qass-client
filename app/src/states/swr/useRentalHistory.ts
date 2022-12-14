import useSWR, { Fetcher } from 'swr'
import { IRentalHistory } from 'src/types'

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/rentalHistory`

const fetcher: Fetcher<IRentalHistory[]> = (url: string) =>
  fetch(url).then((res) => res.json())

export const useRentalHistory = () => {
  const { data, error } = useSWR(apiUrl, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}
