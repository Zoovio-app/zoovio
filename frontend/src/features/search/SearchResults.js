import React from 'react'
import Search from './Search'
import SingleResult from "./SingleResult"
import './searchCss/SearchResults.css'

const SearchResults = () => {

    return(
        <div className='search-results'>
            <SingleResult />
            <SingleResult />
        </div>
    )
}

export default SearchResults