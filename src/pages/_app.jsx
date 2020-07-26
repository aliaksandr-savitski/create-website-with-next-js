import { useEffect } from 'react';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { DefaultSeo } from 'next-seo';
import ReactGA from 'react-ga';
import 'modernizr'; // eslint-disable-line import/no-extraneous-dependencies

import GlobalStyles from '@styles/GlobalStyles';
import theme from '@styles/theme';
import CONFIG from '@config';

import SEO from '../next-seo.config';

const App = ({ Component, pageProps }) => {
  useEffect(() => {
    ReactGA.initialize(CONFIG.analytics.google);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,700;1,500&display=swap" rel="stylesheet" />
      </Head>
      <DefaultSeo {...SEO} />

      <GlobalStyles />

      <Component {...pageProps} />
    </ThemeProvider>
  );
};

App.propTypes = {
  Component: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
  ]).isRequired,
  pageProps: PropTypes.shape().isRequired,
};

export default App;
