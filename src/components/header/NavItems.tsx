import React from 'react'
import { HStack, Link } from '@chakra-ui/react'
import NextLink from 'next/link'

interface NavItemsProps {
  items: Array<{ url: string; target: string; label: string }>
}

export const NavItems = ({ items }: NavItemsProps) => {
  return (
    <HStack spacing="8" align="center">
      {items.map((item) => (
        <NextLink href={item.url} passHref>
          <Link
            sx={{ ':hover': { color: 'primary.dark', textDecoration: 'none' } }}
            target={item.target}
          >
            {item.label}
          </Link>
        </NextLink>
      ))}
    </HStack>
  )
}
