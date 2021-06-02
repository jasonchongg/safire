import React from 'react';
import styled from 'styled-components/macro';
import { colors, FlexRow } from '../../styles';
import { CreateNFT } from '../CreateNFT';
import Footer from '../shared/Footer';

const Minting = () => {
  return (
    <>
      <CreateNFT />
    </>
  );
};
/*
<MintingContainer>
      <Title>CREATE A SINGLE COLLECTIBLE</Title>
      <SubHeading>Upload A File</SubHeading>

      <SubHeading>Pricing Options</SubHeading>
      <SubHeading>🤑 Price</SubHeading>
      <TextForm />
      <FormNote>SERVICE FEE: 2.5%</FormNote>
      <SubHeading>✍Title</SubHeading>
      <TextForm />
      <FormNote>MAX CHARACTERS: 48</FormNote>
      <Button>CREATE ITEM</Button>
    </MintingContainer>
    */

export default Minting;
