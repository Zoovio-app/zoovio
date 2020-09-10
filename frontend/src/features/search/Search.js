import React from "react";
import SearchBar from "./SearchBar";
import { pageVariants, pageTransition } from "../../util/framerStyles";
import { motion } from "framer-motion";
import "./CSS/css.css";

const Search = () => {
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
          <SearchBar />
        </div>
      </motion.div>
    </div>
  );
};

export default Search;
