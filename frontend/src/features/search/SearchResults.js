import React from "react";
import SingleResult from "./SingleResult";
import "./searchCss/SearchResults.css";

const SearchResults = (props) => {
 

  const results = props.result.map((item) => (
    <SingleResult key={item.id} result={item} />
  ));

  return <div className="search-results">{results}</div>;
};

export default SearchResults;
