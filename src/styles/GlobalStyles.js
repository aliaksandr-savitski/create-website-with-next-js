import { createGlobalStyle } from 'styled-components';

import { media } from './style-utils';

const GlobalStyles = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  html {
    scroll-behavior: smooth;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.default};
    font-size: 1rem;
    overflow-x: hidden;
    box-sizing: border-box;

    * {
      box-sizing: inherit;
    }
  }

  a:link,
  a:active {
    color: ${({ theme }) => theme.colors.brand};
  }

  b, strong {
    font-weight: 600;
  }

  i {
    font-style: italic;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.fontFamily.default};
    display: block;
    font-weight: 700;
    margin: 1em 0;
    color: ${({ theme }) => theme.colors.black};
    line-height: 1.5;
  }

  h1 {
    font-size: 2rem;

    ${media.phone`
      font-size: 1.5rem;
    `}
  }

  h2 {
    font-size: 1.25rem;

    ${media.phone`
      font-size: 1.125rem;
    `}
  }

  p {
    color: ${({ theme }) => theme.colors.doveGray};
    font-weight: 300;
    line-height: 1.3;
    font-size: 1rem;
    margin-bottom: 1em;
  }

  ol, ul {
    list-style: none;
    color: ${({ theme }) => theme.colors.doveGray};

    li {
      font-size: inherit;
      color: inherit;
      line-height: inherit;
    }
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  .visually-hidden {
    position: absolute !important;
    clip: rect(1px 1px 1px 1px);
    clip: rect(1px, 1px, 1px, 1px);
    padding:0 !important;
    border:0 !important;
    height: 1px !important; 
    width: 1px !important; 
    overflow: hidden;
  }

  a {
    display: inline-block;
    font-size: inherit;
    font-weight: 600;
    text-decoration: none;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.black};

    &:hover {
      color: ${({ theme }) => theme.colors.wildWillow};
    }

    &:active {
      color: ${({ theme }) => theme.colors.black};
    }
  }
`;

export default GlobalStyles;
