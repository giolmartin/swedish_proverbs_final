import React from 'react';
import { useProverbContext } from '../context/proverb.context';
import RandomCard from '../components/ProverbCard/card.component';
import { ErrorMessage, LoadingMessage } from '../global.styles';

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
    <div>
      <RandomCard
        proverb={randomProverb.text}
        translation={randomProverb['translation-EN']}
      />
      <button onClick={getRandomProverb}>Get Another</button>
    </div>
  );
};

export default Home;
