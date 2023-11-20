import React, { useEffect } from 'react';
import { useProverbContext } from '../context/proverb.context';

import InfiniteScroll from 'react-infinite-scroll-component';
import ListCard from '../components/ListCard/listCard.component';

const ProverbPage = () => {
  const { proverbs, isLoading, error } = useProverbContext();

  const [searchTerm, setSearchTerm] = React.useState('');
  const [filteredProverbs, setFilteredProverbs] = React.useState([]);
  const [currentProverbs, setCurrentProverbs] = React.useState([]);
  const [lastIndex, setLastIndex] = React.useState(0);
  const [hasMore, setHasMore] = React.useState(true);

  //Number of items per load
  const itemsPerPage = 20;

  //Pagination for the infinite scroll
  useEffect(() => {
    setCurrentProverbs(proverbs.slice(0, itemsPerPage));
    setLastIndex(itemsPerPage);
  }, [proverbs]);

  //Function to load more proverbs from the filtered proverbs
  const loadMoreProverbs = () => {
    const nextProverbs = filteredProverbs.slice(
      lastIndex,
      lastIndex + itemsPerPage
    );
    setCurrentProverbs((current) => [...current, ...nextProverbs]);
    setLastIndex(lastIndex + itemsPerPage);

    if (lastIndex + itemsPerPage >= filteredProverbs.length) {
      setHasMore(false);
    }
  };

  //Filtering the proverbs based on the search term from the input
  useEffect(() => {
    const filtered = searchTerm
      ? proverbs.filter((proverb) =>
          proverb.text.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : proverbs;

    setFilteredProverbs(filtered);
    setCurrentProverbs(filtered.slice(0, itemsPerPage));
    setLastIndex(itemsPerPage);
    setHasMore(filtered.length > itemsPerPage);
  }, [searchTerm, proverbs]);

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>{error} Please try again later</h1>;

  return (
    <div>
      <input
        type='text'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder='Search proverbs...'
      />

      {/* https://www.npmjs.com/package/react-infinite-scroll-component 
            Also implemented conditional rendering for when there are no proverbs found
            TODO: Add styling 
       */}
      {currentProverbs.length > 0 ? (
        <InfiniteScroll
          dataLength={currentProverbs.length}
          next={loadMoreProverbs}
          hasMore={hasMore}
          loader={<h4>Loading...</h4>}
        >
          {currentProverbs.map((proverb) => (
            <ListCard
              key={proverb.id}
              proverb={proverb.text}
              translation={proverb['translation-EN']}
            />
          ))}
        </InfiniteScroll>
      ) : (
        <h2>No proverbs found</h2>
      )}
    </div>
  );
};

export default ProverbPage;
