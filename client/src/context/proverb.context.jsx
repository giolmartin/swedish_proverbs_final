import React, { createContext, useState, useEffect, useContext } from 'react';

const ProverbContext = createContext({
  proverbs: [],
  setProverbs: () => {},
});

export const useProverbContext = () => useContext(ProverbContext);

export const ProverbProvider = ({ children }) => {
  const [proverbs, setProverbs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //Finish fetch logic
        const response = await fetch();
        const data = await response.json();
        setProverbs(data);
      } catch (error) {
        console.log('Failed to fetch', error);
      }
    };

    fetchData();
  }, []);
  return (
    <ProverbContext.Provider
      value={{
        proverbs,
      }}
    >
      {children}
    </ProverbContext.Provider>
  );
};
