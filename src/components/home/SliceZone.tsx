import { RichText } from 'prismic-reactjs'

import HomeSection from './HomeSection'
import type { Event } from './Schedule'
import Schedule from './Schedule'
import type { Testimonial } from './Testimonials'
import Testimonials from './Testimonials'

interface Props {
  slice: any
}

interface EventCMS {
  title: string
  start_time: Date
  end_time: Date
  place: string
  place_link: {
    link_type: string
    url: string
    target: string
  }
}

interface TestimonialCMS {
  avatar_photo: {
    url: string
  }
  person_name: string
  occupation: string
  testimonial: Array<{
    text: string
  }>
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

    case 'organizations':
      const newTestimonials: Testimonial[] = slice.items.map(
        (item: TestimonialCMS) => ({
          avatarUrl: item.avatar_photo.url,
          personName: item.person_name,
          occupation: item.occupation,
          testimonial: item.testimonial,
        })
      )

      return <Testimonials testimonials={newTestimonials} />

    default:
      return null
  }
}

export default SliceZone
