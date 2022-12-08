import useSWR, { Fetcher } from 'swr'
import { IAsset } from '@states/types'

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/assets`


const fetcher: Fetcher<IAsset[]> = (url: string) =>
  fetch(url).then((res) => res.json())

export const useAssets = () => {
  const { data, error } = useSWR(apiUrl, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}
