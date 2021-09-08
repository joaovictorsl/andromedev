import { Avatar, Flex, Spacer, Text, Button } from '@chakra-ui/react'

interface Props {
  avatarUrl: string
  name: string
  description: string
  category: string
}

const ProjectCard = ({ avatarUrl, name, description, category }: Props) => (
  <Flex bg="#250D5C" paddingBottom="9" px="14">
    <Spacer />

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
        color="#525252"
        fontSize="sm"
        width="80"
        noOfLines={5}
      >
        {description}
      </Text>
      <Button variant="outline" borderColor="white" width="20" marginBottom="4">
        Saiba mais
      </Button>
      <Text
        fontSize="xs"
        fontWeight="bold"
        width="80"
        marginBottom="6"
        noOfLines={2}
      >
        {category}
      </Text>
    </Flex>

    <Spacer />

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
        color="#525252"
        fontSize="sm"
        width="80"
        noOfLines={5}
      >
        {description}
      </Text>
      <Button variant="outline" borderColor="white" width="20" marginBottom="4">
        Saiba mais
      </Button>
      <Text
        fontSize="xs"
        fontWeight="bold"
        width="80"
        marginBottom="6"
        noOfLines={2}
      >
        {category}
      </Text>
    </Flex>

    <Spacer />
  </Flex>
)

export default ProjectCard
