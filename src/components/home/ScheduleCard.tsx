import { PropsWithChildren } from 'react'

import {
  useStyleConfig,
  LinkBox,
  LinkOverlay,
  Flex,
  Text,
} from '@chakra-ui/react'

interface Props {
  title: string
  startTime: Date
  endTime?: Date
  place?: string
  placeLink?: string
}

const ScheduleCard = ({
  title,
  startTime,
  endTime,
  place,
  placeLink,
}: Props) => {
  const startDay = startTime.toLocaleString('pt-BR', { day: '2-digit' })

  const startMonth = startTime.toLocaleString('pt-BR', { month: 'long' })

  const startHour = startTime.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const endHour = endTime?.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const isToday = (someDate: Date) => {
    const today = new Date()
    return (
      someDate.getUTCDate() == today.getUTCDate() &&
      someDate.getUTCMonth() == today.getUTCMonth() &&
      someDate.getUTCFullYear() == today.getUTCFullYear()
    )
  }

  interface StructureCardProps {
    variant: string
  }

  const StructureCard = ({
    variant,
    children,
  }: PropsWithChildren<StructureCardProps>) => {
    const styles = useStyleConfig('ScheduleCard', { variant })

    return (
      <Flex direction="column" __css={styles}>
        {children}
      </Flex>
    )
  }

  return (
    <LinkBox>
      <LinkOverlay href={placeLink}>
        <StructureCard variant={isToday(startTime) ? 'today' : 'base'}>
          <Text
            fontFamily="heading"
            fontSize="6xl"
            lineHeight="1"
            fontWeight="semibold"
          >
            {startDay}
          </Text>
          <Text
            fontFamily="heading"
            fontSize="2xl"
            marginBottom="20"
            fontWeight="semibold"
            letterSpacing="widest"
          >
            {startMonth}
          </Text>
          <Text
            fontWeight="bold"
            marginBottom="3"
            lineHeight="1.2"
            fontSize="2xl"
          >
            {title}
          </Text>
          <Text fontSize="md">
            {startHour} {endTime && <>— {endHour}</>} {place && <>| {place}</>}
          </Text>
          <Text fontSize="sm" marginTop="3">
            Mais informações @andromedev
          </Text>
        </StructureCard>
      </LinkOverlay>
    </LinkBox>
  )
}

export default ScheduleCard
