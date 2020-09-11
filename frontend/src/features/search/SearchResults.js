import React from "react";
import SingleResult from "./SingleResult";
import "./CSS/SearchResults.css";
import { useSelector } from "react-redux";
import { resultsState } from "./searchResultsSlice";

const SearchResults = () => {
  const results = useSelector(resultsState);

  const res = results.map((item) => (
    <SingleResult key={item.id} result={item} />
  ));

  return (
    <div className="search-results">
      <div className="resultsCont">{res}</div>
    </div>
  );
};

export default SearchResults;
