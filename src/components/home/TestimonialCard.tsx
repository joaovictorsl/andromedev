import { Avatar, Flex, Text } from '@chakra-ui/react'

interface Props {
  avatarUrl: string
  testimonial: string
  name: string
  occupation: string
}

const TestimonialCard = ({
  avatarUrl,
  testimonial,
  name,
  occupation,
}: Props) => (
  <Flex
    textColor="white"
    width="full"
    direction="column"
    align="center"
    py="10"
    px="6"
  >
    <Avatar size="xl" name={name} src={avatarUrl} marginBottom="7" />
    <Text marginBottom="4" textAlign="center">
      {testimonial}
    </Text>
    <Text fontWeight="bold" fontSize="2xl">
      {name}
    </Text>
    <Text fontSize="sm">{occupation}</Text>
  </Flex>
)

export default TestimonialCard
