import React from 'react';
import styled from 'styled-components/macro';
import { colors, FlexRow } from '../../styles';

const Card = (props) => (
  <CardContainer>
    <NFTImage src={props.image} />
    <Title>{props.title}</Title>
    <Address>Current Owner: {props.address}</Address>
    <Price>Current Price: {props.price} SOL</Price>

    {!props.buyNow ? (
      <BuyButton
        onClick={() => (window.location.pathname = 'listing/' + props.id)}
      >
        Buy Now
      </BuyButton>
    ) : null}
  </CardContainer>
);

const CardContainer = styled.div`
  ${'' /* position: fixed; */}
  ${'' /* display: flex; */}
  color: ${colors.white};
  background-color: ${colors.primary};
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  margin: 10px 10px 10px 10px;
  box-sizing: border-box;
`;

const NFTImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${'' /* border: ${(props) => `1px solid ${props.theme.border.cool}`}; */}
`;

const Title = styled.h1`
  color: ${colors.white};
  font-weight: 300;
`;

const Address = styled.div`
  color: #ccc;
  font-weight: 300;
  margin: 6px 0;
`;
const Price = styled.p`
  color: ${colors.white};
  font-weight: 300;
`;

const BuyButton = styled.button`
  margin: 0 5px;
  padding: 8px 14px;
  background: rgba(155, 155, 155, 0.2);
  color: #fff;
  cursor: pointer;
  border: 1px solid #fff;
  outline: 0;
  font-weight: 300;
  :hover {
    opacity: 0.8;
  }
`;

export default Card;
