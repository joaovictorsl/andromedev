export default {
  baseStyle: {
    borderRadius: 'base',
    padding: 8,
    width: 'xs',
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
