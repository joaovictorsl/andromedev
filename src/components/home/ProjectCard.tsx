import { Avatar, Flex, SimpleGrid, Text, Button } from '@chakra-ui/react'

interface Props {
  avatarUrl: string
  name: string
  description: string
  category: string
}

const ProjectCard = ({ avatarUrl, name, description, category }: Props) => (
  <SimpleGrid bg="secondary.darker" position="relative" py="4" px="14">
    <Flex
      bg="white"
      width="lg"
      height="80"
      borderRadius="md"
      textColor="black"
      direction="column"
      paddingTop="8"
      px="8"
    >
      <Avatar
        size="lg"
        name={name}
        src={avatarUrl}
        marginLeft="96"
        marginBottom="-16"
      />
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
        Categoria: {category}
      </Text>
    </Flex>
  </SimpleGrid>
)

export default ProjectCard
