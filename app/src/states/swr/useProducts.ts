import useSWR, { Fetcher } from 'swr'
import { ProductType } from 'src/types'

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/products`

const fetcher: Fetcher<ProductType[]> = (url: string) =>
  fetch(url).then((res) => res.json())

export const useProducts = () => {
  const { data, error } = useSWR(apiUrl, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}
