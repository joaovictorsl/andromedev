import { ChakraProvider, Box } from '@chakra-ui/react'
import type { AppProps } from 'next/app'
import theme from '../lib/theme'
import '@fontsource/poppins/latin.css'
import background from '../../public/background.png'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Box sx={{ backgroundImage: `url(${background.src})` }}>
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
