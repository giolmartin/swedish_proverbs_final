import React from 'react';
import { useProverbContext } from '../context/proverb.context';
import RandomCard from '../components/ProverbCard/card.component';

const Home = () => {
  const { proverbs, isLoading, error } = useProverbContext();
  console.log('Home');

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  console.log(proverbs);

  return (
    //Will apply a random proverb to the card RandomCard
    <div> </div>
  );
};

export default Home;
