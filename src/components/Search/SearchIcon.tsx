import { ActionIcon } from '@mantine/core'
import { IconSearch } from '@tabler/icons-react'

export const SearchIcon = () => {
  return (
    <ActionIcon
      variant="transparent"
      color="dark"
      onClick={() => {
        console.log('test')
      }}
    >
      <IconSearch style={{ width: '70%', height: '70%' }} stroke={1.5} />
    </ActionIcon>
  )
}
