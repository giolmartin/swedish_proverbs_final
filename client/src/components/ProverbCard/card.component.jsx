import React, { useState } from 'react';

import {
  CardContainer,
  CardInside,
  CardBack,
  CardFront,
  Proverb,
  Translation,
} from './card.style';

function RandomCard({ proverb, translation }) {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };
  console.log(proverb, translation);

  return (
    <CardContainer onClick={handleFlip}>
      <CardInside isFlipped={isFlipped}>
        <CardFront>{proverb}</CardFront>
        <CardBack> {translation}</CardBack>
      </CardInside>
    </CardContainer>
  );
}

export default RandomCard;
