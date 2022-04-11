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
  testimonial: RichTextBlock
}
