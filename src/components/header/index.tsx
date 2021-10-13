import React from 'react'
import { Flex } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'

import { Brand } from './Brand'
import { NavItems } from './NavItems'
import { MenuIcon } from './NavItems/MenuIcon'
import { CollapsedMenu } from './NavItems/CollapsedMenu'

export const Header: React.FC = () => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <>
      <Flex
        height="8vh"
        borderBottom="solid"
        borderBottomColor="lightgray"
        borderBottomWidth={1}
        bg="white"
      >
        <Brand />

        <NavItems />

        <MenuIcon {...{ isOpen, onToggle }} />
      </Flex>

      <CollapsedMenu isOpen={isOpen} />
    </>
  )
}
