import React from 'react'
import { Flex, Spacer, useBreakpointValue } from '@chakra-ui/react'
import { useDisclosure } from '@chakra-ui/hooks'

import { Brand } from './Brand'
import CollapsibleToggleButton from './CollapsibleToggleButton'
import CollapsedMenu from './CollapsedMenu'
import { getRouteFromLink } from '../../lib/prismic'
import { NavItems } from './NavItems'

interface NavbarProps {
  cmsNavitems: HeaderNavItemCMS[]
}

const Navbar = ({ cmsNavitems = [] }: NavbarProps) => {
  const { isOpen, onToggle } = useDisclosure()
  const shouldHideWhenMd = useBreakpointValue({ base: true, md: false })
  const links = cmsNavitems.map((item) => ({
    label: item.navitem_label,
    ...getRouteFromLink(item.navitem_link),
  }))

  return (
    <>
      <Flex
        height="16"
        borderBottom="solid"
        borderBottomColor="lightgray"
        borderBottomWidth={1}
        align="center"
        paddingX="8"
        bg="white"
      >
        <Brand />
        <Spacer />
        {!shouldHideWhenMd && <NavItems items={links} />}
        {shouldHideWhenMd && (
          <CollapsibleToggleButton {...{ isOpen, onToggle }} />
        )}
      </Flex>

      {shouldHideWhenMd && <CollapsedMenu items={links} isOpen={isOpen} />}
    </>
  )
}

export default Navbar
