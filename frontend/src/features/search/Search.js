import React, { useState } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { pageVariants, pageTransition } from "../../util/framerStyles";
import { motion } from "framer-motion";
import axios from "axios";

const Search = () => {
  const [result, setResult] = useState([]);
  // console.log(result);
  return (
    <div>
      <SearchBar setResult={setResult} />
      <SearchResults result={result} />
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="calDiv"
      ></motion.div>
    </div>
  );
};

export default Search;

// const [results, setResults] = useState()
// const {history} = useReactRouter()

// const { location } = useReactRouter();
// const params = new URLSearchParams(location.search)
// const term = params.get('find_desc')
// const locationParam = params.get('find_location')
// const [bussinesses, resultAmount, searchParams, setSearchParams] = YelpBussiness(term, locationParam)

// const search = (term, location) => {
// const urlEncodedTerm = encodeURI(term)
// const urlEncodedLocation = encodeURI(location)
// history.push(`?find_desc=${urlEncodedTerm}&find_loc=${urlEncodedLocation}`)
// }
