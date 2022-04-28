interface PrismicLink {
  link_type: string
  type: string
  url: string
  target: string
  uid: string
}

interface EventCMS {
  title: string
  start_time: Date
  end_time: Date
  place: string
  place_link: PrismicLink
}

interface TestimonialCMS {
  avatar_photo: {
    url: string
  }
  person_name: string
  occupation: string
  testimonial: RichTextBlock
}

interface HeaderNavItemCMS {
  navitem_label: string
  navitem_link: PrismicLink
}
