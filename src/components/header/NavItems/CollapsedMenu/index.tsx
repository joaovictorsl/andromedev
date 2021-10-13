import React from 'react'
import { Collapse } from '@chakra-ui/transition'
import { Flex } from '@chakra-ui/react'

import styles from '../../styles.module.css'

interface Props {
  isOpen: boolean
}

export const CollapsedMenu: React.FC<Props> = ({ isOpen }) => {
  return (
    <Collapse in={isOpen} animateOpacity className={styles.d_flex_md}>
      <Flex
        pos="fixed"
        top="8vh"
        zIndex={20}
        padding={4}
        width="100%"
        backgroundColor="#EFEFEF"
        overflow="hidden"
        direction="column"
        align="center"
      >
        <a
          href="#sobre"
          className={styles.hoverable}
          style={{ marginBottom: 10 }}
        >
          Sobre
        </a>
        <a
          href="#guia_do_mochileiro"
          className={styles.hoverable}
          style={{ marginBottom: 10 }}
        >
          Guia do mochileiro
        </a>
        <a href="#projetos" className={styles.hoverable}>
          Projetos
        </a>
      </Flex>
    </Collapse>
  )
}
