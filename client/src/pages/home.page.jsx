import React from 'react';
import { useProverbContext } from '../context/proverb.context';
import Card from '../components/ProverbCard/card.component';

const Home = () => {
  const { proverbs, isLoading, error } = useProverbContext();
  console.log('Home');

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  console.log(proverbs);

  return (
    <div>
      {proverbs.map((proverb, index) => (
        <Card
          key={index}
          proverb={proverb.text}
          translation={proverb['translation-EN']}
        />
      ))}
    </div>
  );
};

export default Home;
