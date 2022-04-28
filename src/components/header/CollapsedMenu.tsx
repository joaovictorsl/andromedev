import React from 'react'
import { Collapse } from '@chakra-ui/transition'
import { Flex, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

interface CollapsedMenuProps {
  isOpen: boolean
  items: Array<{ url: string; target: string; label: string }>
}

const CollapsedMenu = ({ isOpen, items = [] }: CollapsedMenuProps) => {
  return (
    <Collapse in={isOpen} animateOpacity>
      <Flex
        pos="fixed"
        top="16"
        zIndex={20}
        padding={4}
        pt={8}
        width="full"
        backgroundColor="bg.gray"
        overflow="hidden"
        direction="column"
        align="center"
      >
        {items.map((item) => (
          <NextLink href={item.url} passHref>
            <Link
              mb={10}
              sx={{
                ':hover': { color: 'primary.dark', textDecoration: 'none' },
              }}
              target={item.target}
            >
              {item.label}
            </Link>
          </NextLink>
        ))}
      </Flex>
    </Collapse>
  )
}

export default CollapsedMenu
