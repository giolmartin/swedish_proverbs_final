import React, { useContext } from 'react';
import Slider from 'react-slick';
import { useProverbContext } from '../context/proverb.context';
import Card from '../components/ProverbCard/card.component';

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  useTransform: true,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Home = () => {
  const { proverbs, isLoading, error } = useProverbContext();
  console.log('Home');

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  // console.log(proverbs);

  return (
    <Slider {...settings}>
      <Card key={1} proverb={'Hej'} translation={'Hello'} />
      <Card key={2} proverb={'Nej'} translation={'No'} />
      <Card key={3} proverb={'Ja'} translation={'Yes'} />
      <Card key={4} proverb={'Vär'} translation={'Where'} />
    </Slider>

    // <Slider {...settings}>
    //   {proverbs.map((proverb, index) => (
    //     <Card
    //       key={index}
    //       proverb={proverb.text}
    //       translation={proverb['translation-EN']}
    //     />
    //   ))}
    //   ;
    // </Slider>
  );
};

export default Home;
