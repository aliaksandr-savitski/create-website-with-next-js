import PropTypes from 'prop-types';
import styled from 'styled-components';
import Head from 'next/head';

import MainHeader from '@components/MainHeader';
import MainFooter from '@components/MainFooter';
import { media } from '@styles/style-utils';

const MainContent = styled.main`
  height: auto;
  width: 100vw;
`;

const MainLayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  width: 100vw;
  min-height: 100vh;
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;

  ${media.desktop`
    grid-template-columns: auto;
  `}
`;

const MainLayout = ({ title, children }) => (
  <MainLayoutWrapper>
    <Head>
      <title>
        {title}
        &nbsp;| Company Name and description
      </title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <MainHeader />

    <MainContent>
      {children}
    </MainContent>

    <MainFooter />
  </MainLayoutWrapper>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.func,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.func,
    ])),
  ]).isRequired,
  title: PropTypes.string.isRequired,
};

export default MainLayout;
