import { Flex, Box, Button, Heading } from '@chakra-ui/react'

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
        <Flex
          backgroundColor="secondary.normal"
          textColor="white"
          direction="row"
        >
          <Box marginX="60" paddingTop="36">
            <Heading fontSize="6xl">{title}</Heading>
            <Box marginTop="8" fontSize="xl">
              {paragraph}
            </Box>
            <Button marginTop="8" marginBottom="20" variant="solid">
              {buttonLabel}
            </Button>
          </Box>

          <Box marginX="60" align="center">
            oi renan, eu sou a coluna 2
          </Box>
        </Flex>
      )

    case 'secondary':
      return (
        <Flex backgroundColor="secondary.dark" textColor="white">
          <Box marginX="60" paddingTop="36">
            <Heading fontSize="3xl">{title}</Heading>
            <Box marginTop="8" fontSize="md">
              {paragraph}
            </Box>
            <Button marginTop="8" marginBottom="36" variant="link">
              {buttonLabel}
            </Button>
          </Box>
          <Box marginX="60"></Box>
        </Flex>
      )

    case 'centered':
      return (
        <Flex backgroundColor="secondary.normal" textColor="white">
          <Box paddingTop="16" align="center" marginX="96">
            <Heading margin="6" fontSize="2xl">
              {title}
            </Heading>
            <Box fontSize="lg">{paragraph}</Box>
            <Button marginTop="6" marginBottom="20" variant="solid">
              {buttonLabel}
            </Button>
          </Box>
        </Flex>
      )

    default:
      return null
  }
}

export default HomeSection
