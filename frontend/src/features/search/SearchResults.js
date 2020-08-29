import React, { useState } from "react";
import Search from "./Search";
import SingleResult from "./SingleResult";
import "./searchCss/SearchResults.css";
import { useHistory } from "react-router-dom";
import YelpBusiness from "./api/YelpBusiness";

// https://www.yelp.com/search?find_desc=vet&find_loc=nyc
const SearchResults = (props) => {
  props.businesses.map((b) => <SingleResult key={b.id} results={b} />);

  return <div className="search-results">{SearchResults}</div>;
};

export default SearchResults;
