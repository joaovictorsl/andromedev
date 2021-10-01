export default {
  baseStyle: {
    borderRadius: 'base',
    padding: 8,
    width: ['calc(100vw-3em)', '50vw', '20em'],
  },
  sizes: {},
  variants: {
    base: {
      bg: 'white',
    },
    highlighted: {
      bg: 'primary.normal',
      color: 'white',
    },
  },
  defaultProps: {
    variant: 'base',
  },
}
