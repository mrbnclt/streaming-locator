import { useParams } from '@tanstack/react-router'

export const Show = () => {
  const showId = useParams({
    from: '/layout/show/$showId',
    select: (params) => params.showId,
  })

  return <div>{showId}</div>
}
