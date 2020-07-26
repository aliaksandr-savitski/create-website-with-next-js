import { css } from 'styled-components';

import theme from './theme';

const { mediaBreakpoints } = theme;

const media = Object.keys(mediaBreakpoints).reduce((accumulator, label) => {
  accumulator[label] = (...args) => css`
    @media (min-width: ${mediaBreakpoints[label]}px) {
      ${css(...args)};
    }
  `;

  accumulator[label].down = (...args) => css`
    @media (max-width: ${mediaBreakpoints[label] - 1}px) {
      ${css(...args)};
    }
  `;

  return accumulator;
}, {});

export { media, mediaBreakpoints };
