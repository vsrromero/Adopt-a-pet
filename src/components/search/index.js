import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const Search = () => {

  // get the history object here
  const history = useHistory();
  const searchInputRef = useRef();

  const onSearchHandler = (e) => {
    e.preventDefault();

    const searchQuery = new URLSearchParams({
      name: searchInputRef.current.value
    }).toString();

    // redirect to pet's page
    history.push(`/search?${searchQuery}`);
  };

  return (
    <form onSubmit={onSearchHandler} className="search-form">
      <input type="text" className="search" ref={searchInputRef} placeholder="Pet's name" />
      <button type="submit" className="search-button">
        🔎
      </button>
    </form>
  );
};

export default Search;
