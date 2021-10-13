import React from 'react'
import { Flex } from '@chakra-ui/react'

import styles from '../styles.module.css'

export const NavItems: React.FC = () => {
  return (
    <Flex
      width="35vw"
      justifyContent="space-around"
      align="center"
      className={styles.d_none_md}
    >
      <a href="#sobre" className={styles.hoverable}>
        Sobre
      </a>
      <a href="#guia_do_mochileiro" className={styles.hoverable}>
        Guia do mochileiro
      </a>
      <a href="#projetos" className={styles.hoverable}>
        Projetos
      </a>
    </Flex>
  )
}
