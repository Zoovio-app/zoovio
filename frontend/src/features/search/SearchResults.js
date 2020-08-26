import React from 'react'
import Search from './Search'
import SingleResult from "./SingleResult"
import './searchCss/SearchResults.css'


const SearchResults = (props) => {

    return(
        <div className='search-results'>
            <SingleResult />
            
        </div>
    )
}

export default SearchResults