import {
  Flex,
  Box,
  Button,
  Heading,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import type { CSSObject } from '@chakra-ui/react'
import { FC } from 'react'

interface Props {
  title: string
  buttonLabel: string
  paragraph: JSX.Element
  variant: 'primary' | 'secondary' | 'centered'
}

const HomeSectionContainer: FC<{ sx?: CSSObject }> = ({
  children,
  sx = {},
}) => (
  <Flex
    direction="row"
    lineHeight="8"
    paddingX={[14, 32, 48]}
    color="gray.200"
    sx={sx}
  >
    {children}
  </Flex>
)

const HomeSection = ({ title, buttonLabel, paragraph, variant }: Props) => {
  const hiddenImage = useBreakpointValue({ base: true, lg: false })
  switch (variant) {
    case 'primary':
      return (
        <HomeSectionContainer sx={{ paddingTop: '36' }}>
          <Box flex="1">
            <Heading fontSize="6xl" fontWeight="semibold">
              {title}
            </Heading>
            <Box paddingTop="8" fontSize="xl">
              {paragraph}
            </Box>
            <Button marginTop="8" marginBottom="20" size="lg" variant="solid">
              {buttonLabel}
            </Button>
          </Box>
          <Box flex="1" hidden={hiddenImage} align="center">
            <Image />
          </Box>
        </HomeSectionContainer>
      )

    case 'secondary':
      return (
        <HomeSectionContainer sx={{ paddingTop: '24' }}>
          <Box flex="1">
            <Heading fontSize="4xl">{title}</Heading>
            <Box marginTop="8" fontSize="lg">
              {paragraph}
            </Box>
            <Button marginTop="8" variant="link">
              {buttonLabel}
            </Button>
          </Box>
          <Box flex="1" align="center" hidden={hiddenImage}>
            <Image />
          </Box>
        </HomeSectionContainer>
      )

    case 'centered':
      return (
        <HomeSectionContainer
          sx={{
            textAlign: 'center',
            flexDirection: 'column',
            paddingTop: '36',
            alignItems: 'center',
          }}
        >
          <Heading margin="6" fontSize="2xl" fontWeight="bold">
            {title}
          </Heading>
          <Box maxWidth="lg" fontSize="lg" lineHeight="7">
            {paragraph}
          </Box>
          <Button marginTop="6" marginBottom="20" variant="solid">
            {buttonLabel}
          </Button>
        </HomeSectionContainer>
      )

    default:
      return null
  }
}

export default HomeSection
