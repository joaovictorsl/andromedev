import type { MouseEventHandler, ReactNode } from 'react'
import React from 'react'
import { Box, Flex } from '@chakra-ui/layout'
import { IconButton } from '@chakra-ui/react'
import { ChevronRightIcon, ChevronLeftIcon } from '@chakra-ui/icons'
import Slider from 'react-slick'

import TestimonialCard from './TestimonialCard'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

interface ArrowBtnProps {
  onClick?: MouseEventHandler
  left?: boolean
  right?: boolean
  children: ReactNode
}

const ArrowBtn = ({ onClick, left, right, children }: ArrowBtnProps) => (
  <IconButton
    aria-label="arrow"
    variant="ghost"
    colorScheme="blackAlpha"
    height="full"
    position="absolute"
    color="#4FB5F9"
    top={0}
    left={left ? 0 : undefined}
    right={right ? 0 : undefined}
    zIndex={2}
    _focus={{ outline: 'none' }}
    onClick={onClick}
  >
    {children}
  </IconButton>
)

const LeftBtn = ({ onClick }: { onClick?: MouseEventHandler }) => (
  <ArrowBtn left onClick={onClick}>
    <ChevronLeftIcon boxSize="min" />
  </ArrowBtn>
)

const RightBtn = ({ onClick }: { onClick?: MouseEventHandler }) => (
  <ArrowBtn right onClick={onClick}>
    <ChevronRightIcon boxSize="min" />
  </ArrowBtn>
)

const settings = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  nextArrow: <RightBtn />,
  prevArrow: <LeftBtn />,
}

type TestimonialText = Array<{ text: string }>

export interface Testimonial {
  avatarUrl: string
  personName: string
  occupation: string
  testimonial: TestimonialText
}

interface Props {
  testimonials: Testimonial[]
}

const Testimonials = ({ testimonials }: Props) => {
  const textFormatted = (paragraphs: TestimonialText) => {
    return paragraphs.reduce((prev, paragraph) => {
      return `${prev} ${paragraph.text}`
    }, '')
  }

  const listItems = testimonials.map((item, index) => (
    <Box key={index} px={[10, 16, 36, 48]} w="full">
      <TestimonialCard
        avatarUrl={item.avatarUrl}
        testimonial={textFormatted(item.testimonial)}
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
