import React from 'react'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

export const Brand: React.FC = () => {
  return (
    <Flex width="65vw" align="center" padding={3}>
      <a href="/">
        <Image src="/andromedev.svg" width={133} height={100} />
      </a>
      ANDROMEDEV
    </Flex>
  )
}
