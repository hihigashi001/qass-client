import useSWR, { Fetcher } from 'swr'
import { IAsset } from '@states/types'

const fetcher: Fetcher<IAsset[]> = (url: string) =>
  fetch(url).then((res) => res.json())

export const useAssets = () => {
  const { data, error } = useSWR('http://localhost:3000/api/assets', fetcher)

  return {
    data,
    error,
    isLoading: !error && !data
  }
}
