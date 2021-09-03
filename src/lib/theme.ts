import { extendTheme } from '@chakra-ui/react'
import { Fonts } from './fonts'

const theme = extendTheme({
  color: {
    wine: '#3F1A60',
    bg: '#50339A',
    darkePurple: '#250D5C',
    lightPurple: '#50339A',
    orange: '#FF8A0F',
    grayText: '#737373',
    blackText: '#525252',
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
    heading: 'Bahnschrift',
    body: 'Open Sans',
  },
})

export default theme
