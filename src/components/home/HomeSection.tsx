import { Flex, Box, Button, Heading, Image } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  title: string
  buttonLabel: string
  paragraph: JSX.Element
  variant: 'primary' | 'secondary' | 'centered'
}

const HomeSectionContainer: FC = ({ children }) => (
  <Flex direction="row" paddingX="60">
    {children}
  </Flex>
)

const HomeSection = ({ title, buttonLabel, paragraph, variant }: Props) => {
  switch (variant) {
    case 'primary':
      return (
        <HomeSectionContainer>
          <Box flex="5" paddingY="36">
            <Heading fontSize="6xl">{title}</Heading>
            <Box paddingTop="8" fontSize="lg">
              {paragraph}
            </Box>
            <Button marginTop="8" marginBottom="20" size="lg" variant="solid">
              {buttonLabel}
            </Button>
          </Box>
          <Box flex="5" align="center">
            <Image />
          </Box>
        </HomeSectionContainer>
      )

    case 'secondary':
      return (
        <HomeSectionContainer>
          <Box flex="5" paddingY="24">
            <Heading fontSize="4xl">{title}</Heading>
            <Box marginTop="8" fontSize="lg">
              {paragraph}
            </Box>
            <Button marginTop="8" marginBottom="36" variant="link">
              {buttonLabel}
            </Button>
          </Box>
          <Box flex="5" align="center">
            <Image />
          </Box>
        </HomeSectionContainer>
      )

    case 'centered':
      return (
        <HomeSectionContainer>
          <Box paddingTop="16" align="center" paddingX="96">
            <Heading margin="6" fontSize="2xl">
              {title}
            </Heading>
            <Box fontSize="md">{paragraph}</Box>
            <Button marginTop="6" marginBottom="20" variant="solid">
              {buttonLabel}
            </Button>
          </Box>
        </HomeSectionContainer>
      )

    default:
      return null
  }
}

export default HomeSection
