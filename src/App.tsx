import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { Home } from './pages/Home'

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

function App() {
  return (
    <MantineProvider theme={theme}>
      <Home />
    </MantineProvider>
  )
}

export default App
