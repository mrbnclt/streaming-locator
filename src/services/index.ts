import { QueryFunctionContext } from '@tanstack/react-query'
import { Show, Shows } from '../interface/interface'
import axios from 'axios'

export const fetchShows = ({
  queryKey,
}: QueryFunctionContext<[string, string]>): Promise<Shows> => {
  const [, query] = queryKey

  return (
    axios
      .get(
        `https://asia-southeast1-where-is-it-389903.cloudfunctions.net/shows?show=${query}`
      )
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      .then((response) => response.data)
  )
}

export const fetchShow = ({
  queryKey,
}: QueryFunctionContext<[string, string, string]>): Promise<Show> => {
  const [, showId, showType] = queryKey

  return (
    axios
      .get(
        `https://asia-southeast1-where-is-it-389903.cloudfunctions.net/show?showId=${showId}&showType=${showType}`
      )
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      .then((response) => response.data)
  )
}
