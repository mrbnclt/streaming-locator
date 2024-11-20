import {
  Combobox,
  TextInput,
  useCombobox,
  Text,
  Image,
  Box,
} from '@mantine/core'
import { useDebouncedValue } from '@mantine/hooks'
import { useQuery } from '@tanstack/react-query'
import { useEffect, useState } from 'react'
import { fetchShows } from '../../services'
import { useNavigate } from '@tanstack/react-router'

export const SearchInput = () => {
  const navigate = useNavigate()
  const [searchText, setSearchText] = useState<string>('')
  const [debouncedText] = useDebouncedValue<string>(searchText, 500, {
    leading: false,
  })

  const { data } = useQuery({
    queryKey: ['shows', debouncedText],
    queryFn: fetchShows,
  })

  const combobox = useCombobox({
    onDropdownClose: () => {
      combobox.resetSelectedOption()
    },
  })

  useEffect(() => {
    if (data && data.results.length > 0) {
      combobox.openDropdown()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data])

  const options = data?.results.map((item) => (
    <Combobox.Option value={item.id.toString()} key={item.id.toString()}>
      <Box display="flex" style={{ gap: '10px' }}>
        <Image
          radius="md"
          h={200}
          w="auto"
          fit="contain"
          src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
        />
        <Box>
          <Text size="md">{item.name ?? item.title}</Text>
          <Text size="sm" opacity={0.8}>
            {item.overview}
          </Text>
        </Box>
      </Box>
    </Combobox.Option>
  ))

  return (
    <Combobox
      onOptionSubmit={(optionValue) => {
        void navigate({
          to: `/show/${optionValue}`,
        })
      }}
      store={combobox}
    >
      <Combobox.Target>
        <TextInput
          w="45vw"
          size="lg"
          placeholder="find shows"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.currentTarget.value)
          }}
          onFocus={() => {
            if (data && data.results.length > 0) {
              combobox.openDropdown()
            }
          }}
          onBlur={() => {
            combobox.closeDropdown()
          }}
        />
      </Combobox.Target>

      <Combobox.Dropdown style={{ overflowY: 'scroll', maxHeight: '30%' }}>
        <Combobox.Options>
          {data && data.results.length === 0 ? (
            <Combobox.Empty>Nothing found</Combobox.Empty>
          ) : (
            options
          )}
        </Combobox.Options>
      </Combobox.Dropdown>
    </Combobox>
  )
}
