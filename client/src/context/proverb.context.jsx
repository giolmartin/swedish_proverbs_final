import React, { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const ProverbContext = createContext({
  proverbs: [],
  setProverbs: () => {},
});

export const useProverbContext = () => useContext(ProverbContext);

export const ProverbProvider = ({ children }) => {
  const [proverbs, setProverbs] = useState([]);
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
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <ProverbContext.Provider
      value={{
        proverbs,
        isLoading,
        error,
      }}
    >
      {children}
    </ProverbContext.Provider>
  );
};
