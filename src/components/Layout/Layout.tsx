import { AppShell, Burger, Group, UnstyledButton, Image } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { Outlet, useNavigate } from '@tanstack/react-router'
import classes from './Layout.module.css'

export const Layout = () => {
  const [opened, { toggle }] = useDisclosure()
  const navigate = useNavigate()

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: { desktop: true, mobile: !opened },
      }}
      withBorder={false}
    >
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Group justify="space-between" style={{ flex: 1 }}>
            <UnstyledButton onClick={() => void navigate({ to: '/' })}>
              <Image w="35px" h="35px" src="../../logo.svg" />
            </UnstyledButton>
            <Group ml="xl" gap={0} visibleFrom="sm">
              <UnstyledButton className={classes.control}>About</UnstyledButton>
            </Group>
          </Group>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton className={classes.control}>About</UnstyledButton>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}
