import React, { useState } from 'react';
import { Account } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useConnection } from '../../contexts/connection';
import { useWallet } from '../../contexts/wallet';
import { sleep } from '../../utils/utils';

import styled from 'styled-components/macro';
import { colors, FlexRow } from '../../styles';
import Footer from '../shared/Footer';
//import NFTS from '../HomePage/NFTS';
// import { listMarket } from '../utils/send';
// import { CustomMarketInfo, MarketInfo } from '../utils/types';
// import { getMarketInfos, useCustomMarkets, useMarket } from '../utils/markets';
// import { Event } from '@project-serum/serum/lib/queue';
// import { Order } from '@project-serum/serum/lib/market';
// import { SellNFT } from '../components/SellNFT';
// import { MarketProvider } from '../utils/markets';
// import UserInfoTable from '../components/UserInfoTable';
// import OrderbookComponent from '../components/Orderbook';

const key = undefined;

export const CreateNFT = () => {
  const [name, setName] = useState('');
  const [file, setFile] = useState();
  const [price, setPrice] = useState('');
  const [imgPreview, setImgPreview] = useState();

  const connection = useConnection();
  const { wallet } = useWallet();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setFile(file);
    setImgPreview(url);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const submitNftForm = async (e) => {
    e.preventDefault();

    // First we mint a token
    const mintAccount = new Account([
      153,
      105,
      204,
      231,
      42,
      55,
      129,
      191,
      88,
      60,
      38,
      125,
      18,
      237,
      255,
      134,
      96,
      246,
      197,
      166,
      244,
      149,
      184,
      164,
      104,
      242,
      36,
      185,
      79,
      212,
      254,
      221,
      80,
      235,
      177,
      131,
      73,
      158,
      88,
      82,
      171,
      214,
      213,
      209,
      148,
      178,
      110,
      15,
      165,
      244,
      184,
      24,
      2,
      48,
      246,
      122,
      217,
      162,
      10,
      126,
      76,
      103,
      116,
      221,
    ]);
    console.log(mintAccount.publicKey.toString());

    const token = await Token.createMint(
      connection,
      mintAccount,
      mintAccount.publicKey,
      null,
      0,
      TOKEN_PROGRAM_ID
    );
    console.log('Created token', token);

    const newTokenMint = token.publicKey.toString();
    console.log(`Token public key: ${newTokenMint}`);

    await sleep(2000);

    console.log(`CREATING ACCOUNT`);
    console.log(wallet);
    let newAccount1 = await token.createAccount(wallet.publicKey);

    await sleep(2000);

    console.log('MINTING...');
    await token.mintTo(newAccount1, mintAccount, [], 1);

    console.log('MINTED.');
    await sleep(2000);

    try {
      // upload
      //const { cid } = await ipfs.add(file);
      //console.log(`Image upload successful, ipfs: ${cid}`);

      const metadata = {
        title: name,
        image: imgPreview,
        price: price,
        owner: wallet.publicKey.toString(),
        timestamp: Date.now(),
        tokenPublicKey: token.publicKey.toString(),
        id: 9,
      };

      //await addNFT(metadata);

      //Convert JSON Array to string.
      var json = JSON.stringify(metadata);

      //Convert JSON string to BLOB.
      const jsonarray = [json];
      var blob1 = new Blob(jsonarray, { type: 'text/plain;charset=utf-8' });
      const jsonfile = new File([blob1], 'metadata.json');

      //const { cid: metadataSkylink } = await ipfs.get(jsonfile);
      //

      //ipfs.downloadFile(metadataSkylink);
      console.log('Downloaded metadata');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MintingContainer>
      <Title>CREATE A SINGLE COLLECTIBLE</Title>
      <form onSubmit={submitNftForm}>
        <SubHeading>
          ✍Title
          <input
            type='text'
            style={{ width: 250 }}
            placeholder='Name it'
            value={name}
            onChange={onChangeName}
          />
        </SubHeading>
        <SubHeading>
          Upload A File
          <input
            type='file'
            style={{ marginTop: 25, width: 250 }}
            onChange={handleFileChange}
          />
        </SubHeading>
        <SubHeading>Pricing Options</SubHeading>
        <SubHeading>
          🤑 Price
          <input
            type='text'
            style={{ width: 250 }}
            placeholder='Sale Price'
            value={price}
            onChange={onChangePrice}
          />
        </SubHeading>
        <FormNote>SERVICE FEE: 2.5%</FormNote>
        <Button type='submit'> Create NFT </Button>

        <div style={{ marginTop: 10 }}>
          {imgPreview && (
            <img alt='Preview' src={imgPreview} style={{ border: 'none' }} />
          )}
        </div>
      </form>
      <Footer />
    </MintingContainer>
  );
};

const MintingContainer = styled.div`
  ${'' /* position: fixed; */}
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

const Title = styled.h1`
  color: ${colors.white};
  font-weight: 1000;
`;

const SubHeading = styled.h2`
  color: ${colors.white};
  font-weight: 500;
`;

const Button = styled.button`
  color: ${colors.white};
  background-color: ${colors.buttonPrimary};
`;

const TextForm = styled.input`
  height: 10px;
  width: 50vw;
`;

const FormNote = styled.p`
  color: ${colors.white};
  font-size: 10px;
  font-weight: 500;
`;
