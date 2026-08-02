import { createSystem, defineConfig, defaultConfig } from '@chakra-ui/react'

const customConfig = defineConfig({
  globalCss: {
    body: {
      backgroundColor: 'green.300',
      minHeight: '100vh',
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: { value: `'Roboto', sans-serif` },
        body: { value: `'Inter', sans-serif` },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
