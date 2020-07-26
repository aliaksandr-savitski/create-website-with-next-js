import React from 'react';
import styled from 'styled-components';

import { media } from '@styles/style-utils';

const FooterStyledComponent = styled.div`
  width: 5rem;
  height: 5rem;
  background: red;

  ${media.tablet`
    background: green;
  `}
`;

const MainFooter = () => (
  <div>
    Main Footer

    <FooterStyledComponent />
  </div>
);

export default MainFooter;
