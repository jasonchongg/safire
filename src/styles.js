import styled from 'styled-components/macro';

export const colors = {
  primary: '#1F1D2B',
  secondary: '#2D303E',
  buttonPrimary: '#6C5ECF',
  white: 'white',
};

export const MEDIA_SIZE = 600;
export const TABLET_SIZE = 1200;
export const media = {
  mobile: `@media screen and (max-width: ${MEDIA_SIZE}px)`,
  tablet: `@media screen and (max-width: ${TABLET_SIZE}px)`,
  desktop: `@media screen and (min-width: ${MEDIA_SIZE + 1}px)`,
};

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
  flex-wrap: ${(p) => (p.wrap ? 'wrap' : 'nowrap')};
`;

export const CenteredFlexRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0px;
  flex-wrap: ${(p) => (p.wrap ? 'wrap' : 'nowrap')};
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px;
`;
