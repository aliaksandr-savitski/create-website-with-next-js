import React from 'react';
import PropTypes from 'prop-types';

import MainLayout from './MainLayout';

const HomePageLayout = ({ title, children }) => (
  <MainLayout title={title}>
    <h1 className="visually-hidden">{title}</h1>

    {children}
  </MainLayout>
);

HomePageLayout.propTypes = {
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

export default HomePageLayout;
