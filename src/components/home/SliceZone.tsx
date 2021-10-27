import { RichText } from 'prismic-reactjs'
import HomeSection from './HomeSection'
import Schedule from './Schedule'
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
      return <Schedule eventList={slice.items} />

    default:
      return null
  }
}

export default SliceZone
