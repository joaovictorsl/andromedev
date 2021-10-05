import { Avatar, Flex, Text, Button, Box } from '@chakra-ui/react'

interface Props {
  avatarUrl: string
  name: string
  description: string
  category: string
}

const ProjectCard = ({ avatarUrl, name, description, category }: Props) => (
  <Flex
    bg="white"
    width="lg"
    height="80"
    borderRadius="md"
    textColor="black"
    padding="8"
  >
    <Box width="full">
      <Text
        fontFamily="heading"
        marginBottom="4"
        fontWeight="bold"
        fontSize="2xl"
      >
        {name}
      </Text>
      <Text
        marginBottom="4"
        color="gray.600"
        fontSize="sm"
        width="80"
        noOfLines={6}
        height="32"
        align="justify"
      >
        {description}
      </Text>
      <Button
        variant="link"
        borderColor="white"
        width="20"
        marginBottom="4"
        height="5"
      >
        Saiba mais
      </Button>
      <Text
        fontSize="xs"
        fontWeight="bold"
        width="80"
        marginBottom="6"
        noOfLines={2}
      >
        Categoria:{' '}
        <Text as="span" fontWeight="normal">
          {category}
        </Text>
      </Text>
    </Box>
    <Avatar size="lg" name={name} src={avatarUrl} />
  </Flex>
)

export default ProjectCard
