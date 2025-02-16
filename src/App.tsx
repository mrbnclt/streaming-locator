import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { indexRoute, layoutRoute, rootRoute, showRoute } from './routes'
import { MetadataContext } from './components'
import { useState } from 'react'

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

const theme = createTheme({
  colors: {
    blue: [
      '#e4faff',
      '#d5eff7',
      '#b1dce9',
      '#88c8db',
      '#67b7d0',
      '#51acc9',
      '#42a7c6',
      '#3092b0',
      '#1f829e',
      '#00718c',
    ],
  },
  primaryColor: 'blue',
  primaryShade: 3,
  black: '#575757',
})

const queryClient = new QueryClient()

const routeTree = rootRoute.addChildren([
  layoutRoute.addChildren([indexRoute, showRoute]),
])

const router = createRouter({
  routeTree,
})

function App() {
  const [metadata, setMetadata] = useState({ showType: '', showTitle: '' })

  return (
    <MantineProvider theme={theme}>
      <MetadataContext.Provider value={{ metadata, setMetadata }}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </MetadataContext.Provider>
    </MantineProvider>
  )
}

export default App
