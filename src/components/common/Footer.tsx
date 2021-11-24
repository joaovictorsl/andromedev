import { Text, Center, Flex, Image, Avatar } from '@chakra-ui/react'

export default function Footer() {
  const titleSize = '17px'
  const itemStyles = {
    fontWeight: 'medium',
    color: 'primary.grey',
    fontStyle: 'normal',
    fontSize: 'sm',
    lineHeight: '21px',
  }

  return (
    <Center>
      <Flex
        direction="row"
        alignItems="flex-start"
        color="white"
        justifyContent="center"
        py={70}
        px={10}
        flexWrap="wrap"
        gridGap={[10, 14, 20, 24]}
      >
        <Image src="/andromedev-white.svg" alt="Andromedev Logo" />
        <Flex gridGap={[10, 14, 20, 24]} flexWrap="wrap">
          <Flex direction="column" gridGap={22}>
            <Text size={titleSize}>ANDROMEDEV</Text>
            <Flex direction="column" gridGap={4} sx={itemStyles}>
              <a href="">Sobre</a>
              <a href="">Guia do mochileiro</a>
              <a href="">Projetos</a>
            </Flex>
          </Flex>

          <Flex direction="column" gridGap={22}>
            <Text size={titleSize}>SOCIAL</Text>
            <Flex direction="column" gridGap={4} sx={itemStyles}>
              <a href="https://chat.opendevufcg.org" target="_blank">
                Discord
              </a>
              <a href="https://twitter.com/OpenDevUFCG" target="_blank">
                Twitter
              </a>
              <a href="https://github.com/OpenDevUFCG" target="_blank">
                Github
              </a>
              <a href="https://opendevufcg.org/" target="_blank">
                OpenDev UFCG
              </a>
            </Flex>
          </Flex>
        </Flex>
        <Flex direction="column" gridGap={22}>
          <Text size={titleSize}>PATROCINADORES</Text>
          <Flex gridGap={4} wrap="wrap">
            <Avatar w={42} h={42}></Avatar>
            <Avatar w={42} h={42}></Avatar>
            <Avatar w={42} h={42}></Avatar>
            <Avatar w={42} h={42}></Avatar>
            <Avatar w={42} h={42}></Avatar>
          </Flex>
        </Flex>
      </Flex>
    </Center>
  )
}
