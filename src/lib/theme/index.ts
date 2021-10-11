import { extendTheme } from '@chakra-ui/react'
import Button from './button'
import Heading from './heading'

const theme = extendTheme({
  colors: {
    primary: {
      normal: '#4FB5F9',
      dark: '#0090d1',
    },
  },
  components: {
    Button,
    Heading,
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
})

export default theme
