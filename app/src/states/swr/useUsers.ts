import useSWR, { Fetcher } from 'swr'
import { UserType } from 'src/types'

const apiUrl = `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`

const fetcher: Fetcher<UserType[]> = (url: string) =>
  fetch(url).then((res) => res.json())

export const useUsers = () => {
  const { data, error } = useSWR(apiUrl, fetcher)

  return {
    data,
    error,
    isLoading: !error && !data,
  }
}
