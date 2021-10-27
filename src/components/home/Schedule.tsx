import { Box, HStack } from '@chakra-ui/layout'
import { Progress, Heading } from '@chakra-ui/react'
import ScheduleCard from './ScheduleCard'

interface Props {
  eventList: any[]
}

const Schedule = ({ eventList }: Props) => {
  function compareDate(x, y) {
    return new Date(x.start_time) - new Date(y.start_time)
  }
  const sortedEventList = eventList.sort(compareDate)
  const listItems = sortedEventList.map((card) => (
    <ScheduleCard
      title={card.title}
      startTime={new Date(card.start_time)}
      endTime={new Date(card.end_time)}
      place={card.place}
      placeLink={card.place_link}
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
