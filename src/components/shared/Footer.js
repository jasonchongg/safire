import React from 'react';
import styled from 'styled-components/macro';

import { colors, CenteredFlexRow } from '../../styles';

const Footer = () => {
  return (
    <FooterContainer>
      {/* <SearchBar /> */}

      <CenteredFlexRow>
        <FooterText>Safire Marketplace</FooterText>
      </CenteredFlexRow>

      <CenteredFlexRow>
        <FooterText>
          Made by <a href='https://twitter.com/alexanderwu2000'>@Alexander</a>,{' '}
          <a href='https://twitter.com/cunninghamkaito'>@Kaito</a>,{' '}
          <a href='https://twitter.com/talha_atta6'>@Talha</a>, &{' '}
          <a href='https://twitter.com/jasonchongg'>@Jason</a>
        </FooterText>
      </CenteredFlexRow>
      <CenteredFlexRow>
        <FooterText>
          This project is built on Solana and open-source contribute on{' '}
          <a href='https://github.com/alexander-wu-aw/safire-front-end'>
            GitHub
          </a>
        </FooterText>
      </CenteredFlexRow>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  bottom: 0;
  background-color: ${colors.primary};
  width: 100vw;
  height: 150px;
  align-items: center;
  justify-content: space-between;
  padding: 10px 10px;
  box-sizing: border-box;
`;

const FooterText = styled.a`
  color: ${colors.white};
  align-items: center;
  justify-content: space-between;
  margin: 15px;
`;

export default Footer;
