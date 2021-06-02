import React from "react";
import NFTS from "../HomePage/NFTS";
import Card from "../HomePage/Card";

const Listing = (props) => {
  let id = props.location.pathname.replace("/listing/", "");
  let NFT = NFTS.find((el) => el.id == id);

  console.log(NFT);

  return (
    <div>
      <Card
        title={NFT.title}
        address={NFT.address}
        price={NFT.price}
        image={NFT.image}
        id={NFT.id}
        // buyNow={true}
      />
      ;
    </div>
  );
};

export default Listing;
