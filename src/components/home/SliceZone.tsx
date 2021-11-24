import { RichText } from 'prismic-reactjs'
import HomeSection from './HomeSection'
import Schedule from './Schedule'
import { Event } from './Schedule'
interface Props {
  slice: any
}

const SliceZone = ({ slice }: Props) => {
  switch (slice.slice_type) {
    case 'homesection':
      return (
        <HomeSection
          variant={slice.slice_label}
          title={slice.primary.title}
          paragraph={<RichText render={slice.primary.paragraph} />}
          buttonLabel={slice.primary.button_label}
        />
      )

    case 'schedule':
      interface EventLink {
        link_type: string
        url: string
        target: string
      }
      interface EventCMS {
        title: string
        start_time: Date
        end_time: Date
        place: string
        place_link: EventLink
      }
      var newList: Event[] = slice.items.map(function (list: EventCMS) {
        return {
          title: list.title,
          startTime: new Date(list.start_time),
          endTime: new Date(list.end_time),
          place: list.place,
          placeLink: list.place_link.url,
        }
      })

      return <Schedule eventList={newList} />

    default:
      return null
  }
}

export default SliceZone
