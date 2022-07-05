import React from "react";
import { FaSistrix, FaSourcetree } from "react-icons/fa";

const Search = ({ search, setSearch, showSearchBar }) => {
  return (
    <form
      action="#"
      className={
        !showSearchBar ? "search__form" : "search__form search__form--show"
      }
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="search"
        className="search__input"
        placeholder="Nearby Restaurants"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="search__location">
        <FaSourcetree />
      </div>
      <div className="search__icon">
        <FaSistrix />
      </div>
    </form>
  );
};

export default Search;
