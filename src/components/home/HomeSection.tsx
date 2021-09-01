import { FC } from 'react'

interface Props {
  title: string
  buttonLabel: string
  paragraph: JSX.Element
  variant: 'primary' | 'secondary' | 'centered'
}

const HomeSection: FC<Props> = ({ title, buttonLabel, paragraph }) => (
  <div style={{ border: 'solid 1px', padding: 30, marginBottom: 10 }}>
    <h1>{title}</h1>
    {paragraph}
    <button>{buttonLabel}</button>
  </div>
)

export default HomeSection
