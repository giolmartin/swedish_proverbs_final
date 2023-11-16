import React from 'react';
import { useProverbContext } from '../context/proverb.context';
import RandomCard from '../components/ProverbCard/card.component';

const Home = () => {
  const { randomProverb, getRandomProverb, isLoading, error } =
    useProverbContext();
  console.log('Home');

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

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
