import React, { useEffect, useState } from 'react'
import SearchResults  from "./SearchResults"
import SearchBar   from "./SearchBar"
import useReactRouter from 'use-react-router'
import YelpBussiness from './api/YelpBusiness'
import { useHistory } from "react-router-dom";
import { pageVariants, pageTransition } from "../../util/framerStyles";
import { motion } from "framer-motion";

import axios from "axios";
const { REACT_APP_YELP_API } = process.env;
const BASE_URL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/`

let token = REACT_APP_YELP_API 

const Search = (term, location) => {
   
    const [result, setResult] = useState([])
    const headers  = () => {
        headers = {
            Authorization: `Bearer ${REACT_APP_YELP_API }`,
            Origin: 'localhost',
            withCredintals: true
        }
    }
    
    

    // const {location} = useReactRouter
    // // const params = new URLSearchParams(location.Search)
    // const term = params.get('get_desc')
    // const locationParam = params.get('find_loc')
    // const history = useHistory()

    return(
        <div>
            <SearchBar />
            <SearchResults  />
            <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
      className="calDiv"
    >
    </motion.div>
    </div>
    )
}
  
        
    

export default Search 



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
