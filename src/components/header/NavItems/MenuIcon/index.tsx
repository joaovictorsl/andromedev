import React from 'react'
import { Flex } from '@chakra-ui/react'
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons'

import styles from '../../styles.module.css'

interface Props {
  isOpen: boolean
  onToggle: () => void
}

export const MenuIcon: React.FC<Props> = ({ isOpen, onToggle }) => {
  const renderIcon = (): JSX.Element => {
    if (isOpen) {
      return <CloseIcon fontSize={18} onClick={onToggle} />
    }
    return <HamburgerIcon fontSize={24} onClick={onToggle} />
  }

  return (
    <Flex
      width="35vw"
      justifyContent="end"
      padding={3}
      align="center"
      className={styles.d_flex_md}
    >
      {renderIcon()}
    </Flex>
  )
}
