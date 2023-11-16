import React from 'react';

import { CardContainer, ProverbText, TranslationText } from './listCard.style';

const ListCard = ({ proverb, translation }) => {
  return (
    <CardContainer>
      <ProverbText>{proverb}</ProverbText>
      <TranslationText>{translation}</TranslationText>
    </CardContainer>
  );
};

export default ListCard;
