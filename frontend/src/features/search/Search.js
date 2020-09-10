import React, { useState } from "react";
import SearchResults from "./SearchResults";
import SearchBar from "./SearchBar";
import { pageVariants, pageTransition } from "../../util/framerStyles";
import { motion } from "framer-motion";
import "./CSS/css.css";

const Search = () => {
  const [result, setResult] = useState([]);
  // console.log(result);
  return (
    <div className="searchTop">
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={pageTransition}
        className="calDiv"
      >
        <div className="searchMain">
          <SearchBar setResult={setResult} />
          <SearchResults result={result} />
        </div>
      </motion.div>
    </div>
  );
};

export default Search;
