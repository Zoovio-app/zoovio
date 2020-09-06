import React, { useEffect, useState } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { pageVariants, pageTransition } from "../../util/framerStyles";
import { motion } from "framer-motion";

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

