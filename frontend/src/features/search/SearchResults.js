import React, { useState } from "react";
import Search from "./Search";
import SingleResult from "./SingleResult";
import "./searchCss/SearchResults.css";
import { useHistory } from "react-router-dom";
import YelpBusiness from "./api/YelpBusiness";

// https://www.yelp.com/search?find_desc=vet&find_loc=nyc
const SearchResults = (props) => {
  // if (!props.result || !props.result.length) {
  //   return <div> </div>;
  // }
  console.log(props.result);

  const results = props.result.map((item) => (
    <SingleResult key={item.id} result={item} />
  ));

  return <div className="search-results">{results}</div>;
};

export default SearchResults;
