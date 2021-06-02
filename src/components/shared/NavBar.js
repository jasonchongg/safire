import React from 'react';
import styled from 'styled-components/macro';
import logo from '../../img/LogoBackground.png';
import { BrowserRouter as Link } from 'react-router-dom';

import { colors, FlexRow } from '../../styles';
import { ConnectButton } from '../ConnectButton';

const NavBar = () => {
  return (
    <NavBarContainer>
      <Logo src={logo} href='home' />
      <SearchBar />

      <FlexRow>
        <NavButton href='minting'>MINT NFT</NavButton>{' '}
        <NavButton href='https://www.notion.so/Safire-Marketplace-FAQs-3e1e6ca8ee89415ba19ab93d145bfc42'>
          FAQ
        </NavButton>
        <ConnectButton
          type='text'
          size='large'
          allowWalletChange={true}
          style={{ color: '#2abdd2' }}
        />
      </FlexRow>
    </NavBarContainer>
  );
};

const NavBarContainer = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  background-color: ${colors.primary};
  width: 100vw;
  height: 52px;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  height: 100%;
  ${'' /* display: flex; */}
  ${'' /* align-items: center;
  padding: 7px 14px;
  float: left !important;
  margin-top: -15px !important; */}
`;

const SearchBar = styled.input`
  height: 100%;
  width: 50vw;
`;

const NavButton = styled.a`
  color: ${colors.white};
  margin: 0px 15px;
`;

const WalletConnect = styled.button`
  margin-left: 15px;
`;

export default NavBar;
