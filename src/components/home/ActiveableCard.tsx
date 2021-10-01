import { PropsWithChildren } from 'react'

import { useStyleConfig, Flex } from '@chakra-ui/react'

interface Props {
  variant?: 'base' | 'highlighted'
}

const ActiveableCard = ({
  variant = 'base',
  children,
}: PropsWithChildren<Props>) => {
  const styles = useStyleConfig('ActiveableCard', { variant })

  return (
    <Flex direction="column" __css={styles}>
      {children}
    </Flex>
  )
}

export default ActiveableCard
