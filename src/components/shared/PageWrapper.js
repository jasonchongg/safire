import React from 'react';
import styled from 'styled-components/macro';

import { colors } from '../../styles';

const PageWrapper = ({ children }) => {
  return <PageWrapperContainer>{children}</PageWrapperContainer>;
};

const PageWrapperContainer = styled.div`
  background-color: ${colors.secondary};
  width: 100%;
  margin-top: 52px;
`;

export default PageWrapper;
