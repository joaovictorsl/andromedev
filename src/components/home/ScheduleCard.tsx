import { LinkBox, LinkOverlay, Text } from '@chakra-ui/react'

import ActiveableCard from './ActiveableCard'

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

  const isPastEvent = (someDate: Date) => {
    const today = new Date()

    return (
      someDate.getUTCFullYear() < today.getUTCFullYear() ||
      (someDate.getUTCFullYear() === today.getUTCFullYear() &&
        someDate.getUTCMonth() < today.getUTCMonth()) ||
      (someDate.getUTCFullYear() === today.getUTCFullYear() &&
        someDate.getUTCMonth() === today.getUTCMonth() &&
        someDate.getUTCDate() < today.getUTCDate())
    )
  }

  return (
    <LinkBox>
      <LinkOverlay target="_blank" href={placeLink}>
        <ActiveableCard
          variant={
            isToday(startTime)
              ? 'highlighted'
              : isPastEvent(startTime)
              ? 'disabled'
              : 'base'
          }
        >
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
            marginBottom="16"
            fontWeight="normal"
            letterSpacing="widest"
          >
            {startMonth}
          </Text>
          <Text
            fontWeight="medium"
            marginBottom="3"
            lineHeight="1.2"
            fontSize="2xl"
          >
            {title}
          </Text>
          <Text fontSize="md" fontWeight="light">
            {startHour} {endTime && <>— {endHour}</>} {place && <>| {place}</>}
          </Text>
          <Text fontSize="sm" fontWeight="light" marginTop="3">
            Mais informações @andromedev
          </Text>
        </ActiveableCard>
      </LinkOverlay>
    </LinkBox>
  )
}

export default ScheduleCard
