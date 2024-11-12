import '@mantine/core/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'

const theme = createTheme({})

function App() {
  return (
    <MantineProvider theme={theme}>
      <p>test</p>
      <div>test</div>
    </MantineProvider>
  )
}

export default App
