import useSWR, { Fetcher } from 'swr'
import { AssetType } from 'src/types'

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/assets`

const fetcher: Fetcher<AssetType[]> = (url: string) =>
  fetch(url).then((res) => res.json())

export const useAssets = () => {
  const { data, error } = useSWR(apiUrl, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}
