import { useParams } from '@tanstack/react-router'
import { MetadataContext, SearchInput } from '../components'
import { Container } from '@mantine/core'
import { useQuery } from '@tanstack/react-query'
import { fetchShow } from '../services'
import { useContext } from 'react'

export const Show = () => {
  const context = useContext(MetadataContext)

  const showId = useParams({
    from: '/layout/show/$showId',
    select: (params) => params.showId,
  })

  const { data } = useQuery({
    queryKey: ['show', showId, context.metadata.showType],
    queryFn: fetchShow,
  })

  console.log(data)

  return (
    <>
      <Container my="xs">
        <SearchInput placeholder={context.metadata.showTitle} />
      </Container>
    </>
  )
}
