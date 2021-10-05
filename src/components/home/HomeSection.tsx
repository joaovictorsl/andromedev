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
        <Flex backgroundColor="secondary.normal" textColor="white">
          <Box marginLeft="155" paddingTop="148" marginRight="886">
            <Heading fontSize="6xl">{title}</Heading>
            <Box marginTop="8" fontSize="xl">
              {paragraph}
            </Box>
            <Button marginTop="8" marginBottom="20" variant="solid">
              {buttonLabel}
            </Button>
          </Box>
          <Box></Box>
        </Flex>
      )

    case 'secondary':
      return (
        <Flex backgroundColor="secondary.dark" textColor="white">
          <Box marginLeft="155" paddingTop="148" marginRight="843">
            <Heading fontSize="3xl">{title}</Heading>
            <Box marginTop="8" fontSize="md">
              {paragraph}
            </Box>
            <Button marginTop="8" marginBottom="36" variant="link">
              {buttonLabel}
            </Button>
          </Box>
          <Box></Box>
        </Flex>
      )

    case 'centered':
      return (
        <Flex backgroundColor="secondary.normal" textColor="white">
          <Box
            paddingTop="69"
            align="center"
            marginRight="576.95"
            marginLeft="576.05"
          >
            <Heading margin="6" fontSize="2xl">
              {title}
            </Heading>
            <Box fontSize="lg">{paragraph}</Box>
            <Button marginTop="6" marginBottom="20" variant="solid">
              {buttonLabel}
            </Button>
          </Box>
          <Box></Box>
        </Flex>
      )

    default:
      return null
  }
}

export default HomeSection
