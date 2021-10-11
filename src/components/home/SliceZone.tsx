import { RichText } from 'prismic-reactjs'
import HomeSection from './HomeSection'

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

    default:
      return null
  }
}

export default SliceZone
