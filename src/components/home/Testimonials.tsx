import React from 'react'
import type { MouseEventHandler } from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import type { RichTextBlock } from 'prismic-reactjs'
import { RichText } from 'prismic-reactjs'
import Slider from 'react-slick'

import TestimonialCard from './TestimonialCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ArrowBtnProps {
  direction: 'left' | 'right'
  onClick?: MouseEventHandler
}

const ArrowBtn = ({ direction, onClick }: ArrowBtnProps) => (
  <IconButton
    aria-label="arrow"
    variant="ghost"
    colorScheme="blackAlpha"
    height="full"
    position="absolute"
    color="primary.normal"
    top={0}
    left={direction === 'left' ? 0 : undefined}
    right={direction === 'right' ? 0 : undefined}
    zIndex={2}
    _focus={{ outline: 'none' }}
    onClick={onClick}
  >
    {direction === 'left' ? (
      <ChevronLeftIcon boxSize="min" />
    ) : (
      <ChevronRightIcon boxSize="min" />
    )}
  </IconButton>
)

export interface Testimonial {
  avatarUrl: string
  personName: string
  occupation: string
  testimonial: RichTextBlock[]
}

interface Props {
  testimonials: Testimonial[]
}

const Testimonials = ({ testimonials }: Props) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToScroll: 1,
    nextArrow: <ArrowBtn direction="right" />,
    prevArrow: <ArrowBtn direction="left" />,
  }

  const listItems = testimonials.map((item, index) => (
    <Box key={index} px={[10, 16, 36, 48]} w="full">
      <TestimonialCard
        avatarUrl={item.avatarUrl}
        testimonial={<RichText render={item.testimonial} />}
        name={item.personName}
        occupation={item.occupation}
      />
    </Box>
  ))

  return (
    <Flex justifyContent="center" marginTop={36}>
      <Box maxW="5xl" overflow="hidden" px={12}>
        <Slider {...settings}>{listItems}</Slider>
      </Box>
    </Flex>
  )
}

export default Testimonials
