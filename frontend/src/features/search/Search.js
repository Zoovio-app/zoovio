import React from 'react'
import SearchResults  from "./SearchResults"
import SearchBar  from "./SearchBar"
import useReactRouter from 'use-react-router'

const Search = () => {

    const {location } = useReactRouter();
    const params = new URLSearchParams(location.search)
    const term = params.get('find_desc')
    const locationParam = ('find_location')

    return(
        <div>
            <SearchBar/>
            <SearchResults  />
        </div>
    )
}

export default Search 