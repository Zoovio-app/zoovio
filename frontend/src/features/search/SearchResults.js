import React from "react";
import SingleResult from "./SingleResult";
import "./CSS/SearchResults.css";
import { useSelector } from "react-redux";
import { resultsState } from "./searchResultsSlice";
import searchPromt from "../../images/search.png";
const SearchResults = () => {
  const results = useSelector(resultsState);

  const res = results.map((item) => {
    return <SingleResult key={item.id} result={item} />;
  });

  if (results.length < 1) {
    return (
      <div className="search-results">
        <div className="noResPromt">
          <p>Search for a service provider utilizing the search bar above.</p>
        </div>
        <div className="noResPromtNote">
          <p>
            NOTE: If the search result displays a "contact provider" button then
            the provider can be reached via the communications feature!
          </p>
        </div>
        <div className="noResImg">
          <img alt="" src={searchPromt} />
        </div>
      </div>
    );
  }

  return (
    <div className="search-results">
      <div className="resultsCont">{res}</div>
    </div>
  );
};

export default SearchResults;
