import React from 'react'
import { Flex } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

interface MenuIconProps {
  isOpen: boolean
  onToggle: () => void
}

const CollapsibleToggleButton = ({ isOpen, onToggle }: MenuIconProps) => {
  const renderIcon = (): JSX.Element => {
    if (isOpen) {
      return <CloseIcon fontSize={18} onClick={onToggle} />
    }
    return <HamburgerIcon fontSize={24} onClick={onToggle} />
  }

  return (
    <Flex width="35vw" justifyContent="end" padding={3} align="center">
      {renderIcon()}
    </Flex>
  )
}

export default CollapsibleToggleButton
