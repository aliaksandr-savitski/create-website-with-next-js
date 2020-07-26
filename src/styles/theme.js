const palette = {
  wildWillow: '#3299D9',
  lima: '#66D927',
  black: '#000000',
  alabaster: '#FCFCFC',
  valencia: '#D94848',
  california: '#F29F05',
};

const colors = {
  palette,
  brand: palette.wildWillow,
  black: palette.black,
  white: palette.alabaster,
  success: palette.lima,
  danger: palette.valencia,
  warning: palette.california,
};

const theme = {
  colors,
  fonts: {
    fontFamily: {
      default: '"Roboto", sans-serif',
    },
  },
  transitionSpeed: {
    fast: '150ms',
    medium: '300ms',
    slow: '450ms',
  },
  mediaBreakpoints: {
    ultraWideScreen: 1170,
    desktop: 992,
    tablet: 768,
  },
};

export default theme;
