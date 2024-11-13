import { Center, Image, Text, Title } from '@mantine/core'
import { SearchInput } from '../components'

export const Home = () => {
  return (
    <Center
      w="100%"
      h="100%"
      display="flex"
      style={{ flexDirection: 'column', gap: '15px' }}
    >
      <Image w="100px" h="100px" src="./logo.svg" />
      <Title order={1} size="h2">
        Watch On
      </Title>
      <Text c="dimmed">Find where shows are streamed on your region</Text>
      <SearchInput />
    </Center>
  )
}
