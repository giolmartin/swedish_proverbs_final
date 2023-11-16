import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ProverbContext = createContext({
  proverbs: [],
  setProverbs: () => {},
  randomProverb: {},
  setRandomProverb: () => {},
  getRandomProverb: () => {},
});

export const useProverbContext = () => useContext(ProverbContext);

export const ProverbProvider = ({ children }) => {
  const [proverbs, setProverbs] = useState([]);
  const [randomProverb, setRandomProverb] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Fetching data from my API
        //Using axios for simplification of process of fetching data
        const response = await axios.get(
          'https://giolmartin.github.io/svenska-ordsprak-API/data/svenska-ordsprak.json'
        );
        setProverbs(response.data);
        setRandomProverb(
          response.data[Math.floor(Math.random() * response.data.length)]
        );
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const getRandomProverb = () => {
    const i = Math.floor(Math.random() * proverbs.length);
    setRandomProverb(proverbs[i]);
  };

  return (
    <ProverbContext.Provider
      value={{
        randomProverb,
        getRandomProverb,
        proverbs,
        isLoading,
        error,
      }}
    >
      {children}
    </ProverbContext.Provider>
  );
};
