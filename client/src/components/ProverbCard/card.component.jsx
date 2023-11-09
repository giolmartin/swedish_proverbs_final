import React from 'react';

import { CardContainer, Proverb, Translation } from './card.style';

const Card = ({ proverb, translation }) => (
  <CardContainer>
    <Proverb>{proverb}</Proverb>
    <Translation>{translation}</Translation>
  </CardContainer>
);

export default Card;
