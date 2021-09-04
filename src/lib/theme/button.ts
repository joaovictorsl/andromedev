export default {
  baseStyle: {
    fontWeight: 'semibold',
    borderRadius: 'base',
    fontSize: 'lg',
  },
  sizes: {
    sm: {
      fontSize: 'xs',
      py: 3,
      px: 2,
    },
    md: {
      py: 4,
      px: 10,
    },
  },
  variants: {
    solid: {
      bg: 'primary.normal',
      color: 'white',
      ':hover': {
        bg: 'primary.dark',
      },
    },
    outline: {
      border: '1px solid',
      borderColor: 'primary.normal',
      color: 'primary.normal',
    },
    link: {
      color: 'primary.normal',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
}
