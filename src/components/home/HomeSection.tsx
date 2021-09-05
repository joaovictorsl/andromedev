import { Box, Button, Heading } from '@chakra-ui/react'

interface Props {
  title: string
  buttonLabel: string
  paragraph: JSX.Element
  variant: 'primary' | 'secondary' | 'centered'
}

const HomeSection = ({ title, buttonLabel, paragraph, variant }: Props) => {
  switch (variant) {
    case 'primary':
      return (
        <Box marginLeft="155" paddingTop="148" marginRight="886">
          <Heading fontSize="6xl">{title}</Heading>
          <Box marginTop="32px" fontSize="xl">
            {paragraph}
          </Box>
          <Button marginTop="32px" variant="solid">
            {buttonLabel}
          </Button>
        </Box>
      )

    case 'secondary':
      return (
        <Box marginLeft="155" paddingTop="148" marginRight="843">
          <Heading fontSize="3xl">{title}</Heading>
          <Box marginTop="32px" fontSize="md">
            {paragraph}
          </Box>
          <Button marginTop="32px" variant="link">
            {buttonLabel}
          </Button>
        </Box>
      )

    case 'centered':
      return (
        <Box
          paddingTop="69"
          align="center"
          marginRight="576.95"
          marginLeft="576.05"
        >
          <Heading margin="24px 0px" fontSize="2xl">
            {title}
          </Heading>
          <Box fontSize="lg">{paragraph}</Box>
          <Button marginTop="24px" variant="solid">
            {buttonLabel}
          </Button>
        </Box>
      )

    default:
      return null
  }
}

export default HomeSection
