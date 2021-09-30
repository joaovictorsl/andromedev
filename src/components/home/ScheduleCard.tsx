import { LinkBox, LinkOverlay, Flex, Text } from '@chakra-ui/react'

interface Props {
  title: string
  startTime: Date
  endTime: Date
  place: string
  placeLink: string
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
  const endHour = endTime.toLocaleTimeString('pt-BR', {
    hour: '2-digit',
    minute: '2-digit',
  })
  return (
    <LinkBox>
      <LinkOverlay href={placeLink}>
        <Flex textColor="black" width="full" direction="column" py="10" px="6">
          <Text marginBottom="4">{startDay}</Text>
          <Text marginBottom="4">{startMonth}</Text>
          <Text fontWeight="bold" fontSize="2xl">
            {title}
          </Text>
          <Text fontSize="sm">
            {startHour} - {endHour} | {place}
          </Text>
        </Flex>
      </LinkOverlay>
    </LinkBox>
  )
}

export default ScheduleCard
