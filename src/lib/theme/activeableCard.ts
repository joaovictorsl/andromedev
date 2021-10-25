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
      bg: 'disabled.bg',
      color: 'disabled.text',
    },
  },
  defaultProps: {
    variant: 'base',
  },
}
