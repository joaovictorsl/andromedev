import React from 'react'
import { Image, Text, Link, HStack } from '@chakra-ui/react'

export const Brand = () => {
  return (
    <Link href="/" textDecoration="none">
      <HStack spacing="2" align="center">
        <Image src="/andromedev.svg" height="10" />
        <Text textDecoration="none" fontWeight="semibold">
          ANDROMEDEV
        </Text>
      </HStack>
    </Link>
  )
}
