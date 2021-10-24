import { Text, Center, Flex, Image, Avatar } from '@chakra-ui/react'

export default function Footer() {
  const fontCustonStyle = {
    color: '#B2B2B2',
    fontFamily: 'Poppins',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: '14px',
    lineHeight: '21px',
  }
  return (
    <Center bg="#120732">
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
        <Image src="/assets/img/andromedev.svg" alt="Andromedev Logo"></Image>
        <Flex gridGap={[10, 14, 20, 24]} flexWrap="wrap">
          <Flex direction="column" gridGap={22}>
            <Text fontFamily="Bahnschrift" size="17px">
              ANDROMEDEV
            </Text>
            <Flex direction="column" gridGap={4} sx={fontCustonStyle}>
              <a href="">Sobre</a>
              <a href="">Guia do mochileiro</a>
              <a href="">Projetos</a>
            </Flex>
          </Flex>

          <Flex direction="column" gridGap={22}>
            <Text fontFamily="Bahnschrift" size="17px">
              SOCIAL
            </Text>
            <Flex direction="column" gridGap={4} sx={fontCustonStyle}>
              <a href="https://discord.gg/UgR5WrY" target="_blank">
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
          <Text fontFamily="Bahnschrift" size="17px">
            PATROCINADORES
          </Text>
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
