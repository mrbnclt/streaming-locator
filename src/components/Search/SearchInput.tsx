import { Input } from '@mantine/core'
import { useState } from 'react'
import { SearchIcon } from './SearchIcon'

export const SearchInput = () => {
  const [searchText, setSearchText] = useState<string>()
  return (
    <Input
      w="40vw"
      size="lg"
      placeholder="find show"
      value={searchText}
      onChange={(event) => {
        setSearchText(event.currentTarget.value)
      }}
      rightSectionPointerEvents="all"
      rightSection={<SearchIcon />}
    />
  )
}
