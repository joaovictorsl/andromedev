import { RichText } from 'prismic-reactjs'

import HomeSection from './HomeSection'
import Schedule from './Schedule'
import Testimonials from './Testimonials'

interface Props {
  slice: any
}

const SliceZone = ({ slice }: Props) => {
  const testimonialsFormatted = (testimonials: TestimonialCMS[]) =>
    testimonials.map((item) => ({
      avatarUrl: item.avatar_photo.url,
      personName: item.person_name,
      occupation: item.occupation,
      testimonial: item.testimonial,
    }))

  const scheduleFormatted = (events: EventCMS[]) =>
    events.map((event) => {
      return {
        title: event.title,
        startTime: new Date(event.start_time),
        endTime: new Date(event.end_time),
        place: event.place,
        placeLink: event.place_link.url,
      }
    })

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
      return <Schedule eventList={scheduleFormatted(slice.items)} />

    case 'organizations':
      return <Testimonials testimonials={testimonialsFormatted(slice.items)} />

    default:
      return null
  }
}

export default SliceZone
