import React, { useState } from 'react';
import { Account } from '@solana/web3.js';
import { Token, TOKEN_PROGRAM_ID } from '@solana/spl-token';
import { useConnection } from '../../contexts/connection';
import { useWallet } from '../../contexts/wallet';
import { sleep } from '../../utils/utils';
// const IPFS = require('ipfs-core');
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
  const [name, setName] = useState<string>('');
  const [file, setFile] = useState<any>();
  const [imgPreview, setImgPreview] = useState<string>();

  const connection = useConnection();
  const { wallet } = useWallet();

  const handleFileChange = (event: any) => {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    setFile(file);
    setImgPreview(url);
  };

  const onChangeName = (e: any) => {
    setName(e.target.value);
  };

  const submitNftForm = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //const ipfs = await IPFS.create();

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
    let newAccount1 = await token.createAccount(wallet!.publicKey!);

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
        name,
        imageSkylink: 'HELLO',
        owner: wallet!.publicKey!.toString(),
        timestamp: Date.now(),
        tokenPublicKey: token.publicKey.toString(),
      };

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
    <form onSubmit={submitNftForm}>
      <h5>Step 2 - Create your NFT</h5>
      <input
        type='text'
        style={{ width: 250 }}
        placeholder='Name it'
        value={name}
        onChange={onChangeName}
      />
      <input
        type='file'
        style={{ marginTop: 25, width: 250 }}
        onChange={handleFileChange}
      />
      <button type='submit' style={{ marginLeft: 15, marginTop: 25 }}>
        Create NFT
      </button>
      <div style={{ marginTop: 10 }}>
        {imgPreview && (
          <img alt='Preview' src={imgPreview} style={{ border: 'none' }} />
        )}
      </div>
    </form>
  );
};
