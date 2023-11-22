import React from 'react';
import { useProverbContext } from '../../context/proverb.context';
import RandomCard from '../../components/ProverbCard/card.component';
import { Button } from '../../components/Button/button.style';

import { ErrorMessage, LoadingMessage } from '../../global.styles';

import { HomeContainer, ButtonContainer } from './home.style';
const Home = () => {
  const { randomProverb, getRandomProverb, isLoading, error } =
    useProverbContext();
  console.log('Home');

  if (isLoading) return <LoadingMessage>Loading...</LoadingMessage>;
  if (error)
    return <ErrorMessage>{error}: Please try again later.</ErrorMessage>;
  if (!randomProverb)
    return <ErrorMessage>Please try again later.</ErrorMessage>;

  console.log(randomProverb);

  return (
    //Will apply a random proverb to the card RandomCard
    <HomeContainer>
      <RandomCard
        proverb={randomProverb.text}
        translation={randomProverb['translation-EN']}
      />
      <ButtonContainer>
        <Button onClick={getRandomProverb}>Get Another</Button>
      </ButtonContainer>
    </HomeContainer>
  );
};

export default Home;
