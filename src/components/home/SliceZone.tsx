import { RichText } from 'prismic-reactjs'
import { FC } from 'react'
import HomeSection from './HomeSection'

interface Props {
  slice: any
}

const SliceZone: FC<Props> = ({ slice }) => {
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

    case 'organizations':
      return (
        <div style={{ border: 'solid 1px', padding: 30, marginBottom: 10 }}>
          <h1>Aqui fica o carrosel de orgs</h1>
        </div>
      )

    default:
      return null
  }
}

export default SliceZone
