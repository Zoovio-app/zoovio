import React from 'react'
import SearchResults  from "./SearchResults"
import SearchBar  from "./SearchBar"
import useReactRouter from 'use-react-router'

const Search = () => {

    const {history} = useReactRouter
    
    const searchHistoryResults = (selectTag, location) => {
        const urlEncodedSelect = encodeURI(selectTag)
        const urlEncodedLocation = encodeURI(location)
        history.push(`/search?find_desc=${urlEncodedSelect}&find_loc=${urlEncodedLocation}`)
      }

    const {location } = useReactRouter();
    const params = new URLSearchParams(location.search)
    const term = params.get('find_desc')
    const locationParam = ('find_location')

    return(
        <div>
            <SearchBar Search={searchHistoryResults}/>
            <SearchResults  />
        </div>
    )
}

export default Search 