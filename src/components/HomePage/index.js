import React, { useMemo } from 'react';
import styled from 'styled-components/macro';
import { colors, FlexRow } from '../../styles';
import NFTS from './NFTS';

import Card from './Card';

const HomePage = () => {
  const nftRows = [];
  let cards = [];

  let i = 0;
  while (i < NFTS.length) {
    if (i % 3 === 0 && i !== 0) {
      nftRows.push(cards);
      cards = [];
    }

    cards.push(NFTS[i]);

    i += 1;
  }

  if (cards.length > 0) {
    nftRows.push(cards);
  }

  return (
    <HomeContainer>
      {nftRows.map((cards) => (
        <FlexRow>
          {cards.map((card) => (
            <Card
              title={card.title}
              address={card.address}
              price={card.price}
              image={card.image}
              id={card.id}
            />
          ))}
        </FlexRow>
      ))}
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  ${'' /* position: fixed; */}
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
`;

export default HomePage;
