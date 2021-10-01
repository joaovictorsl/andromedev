import { extendTheme } from '@chakra-ui/react'
import Button from './button'
import ScheduleCard from './scheduleCard'

const theme = extendTheme({
  colors: {
    primary: {
      normal: '#FF8A0F',
      dark: '#E67600',
    },
    secondary: {
      light: '#3F1A60',
      normal: '#50339A',
      dark: '#37236A',
      darker: '#250D5C',
    },
  },
  components: {
    Button,
    ScheduleCard,
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
