import { Box, HStack } from '@chakra-ui/layout'
import { Progress, Heading } from '@chakra-ui/react'
import ScheduleCard from './ScheduleCard'

export interface Event {
  title: string
  startTime: Date
  endTime: Date
  place: string
  placeLink: string
}
interface Props {
  eventList: Event[]
}

const Schedule = ({ eventList }: Props) => {
  function compareDate(x: Event, y: Event) {
    if (new Date(x.startTime) > new Date(y.startTime)) return 1
    return -1
  }
  const sortedEventList = eventList.sort(compareDate)
  const listItems = sortedEventList.map((card) => (
    <ScheduleCard
      title={card.title}
      startTime={new Date(card.startTime)}
      endTime={new Date(card.endTime)}
      place={card.place}
      placeLink={card.placeLink}
    />
  ))

  return (
    <Box>
      <Heading
        marginBottom="14"
        marginLeft={[14, 32, 48]}
        fontSize="4xl"
        color="gray.200"
        marginTop="36"
      >
        Programação
      </Heading>
      <HStack marginLeft={[14, 32, 48]} overflowX="hidden">
        {listItems}
      </HStack>
      <Progress
        marginLeft="auto"
        marginRight="auto"
        value={20}
        size="xs"
        color="primary.normal"
        width="50%"
        marginTop="10"
      />
    </Box>
  )
}

export default Schedule
