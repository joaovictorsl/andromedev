import { Box, Button, Heading } from '@chakra-ui/react'

interface Props {
  title: string
  buttonLabel: string
  paragraph: JSX.Element
  variant: 'primary' | 'secondary' | 'centered'
}

const HomeSection = ({ title, buttonLabel, paragraph }: Props) => (
  <Box p="10">
    <Heading>{title}</Heading>
    {paragraph}
    <Button>{buttonLabel}</Button>
  </Box>
)

export default HomeSection
