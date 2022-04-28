export default {
  baseStyle: {
    borderRadius: 'base',
    padding: 8,
    width: 'md',
    height: 'xs',
  },
  sizes: {},
  variants: {
    base: {
      bg: 'white',
    },
    highlighted: {
      bg: 'primary.normal',
    },
    disabled: {
      bg: '#f7f8f8',
      color: '#919192',
    },
  },
  defaultProps: {
    variant: 'base',
  },
}
