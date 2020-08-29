import React from 'react'
import Search from './Search'
import SingleResult from "./SingleResult"
import './searchCss/SearchResults.css'
import { useHistory } from 'react-router-dom'

// https://www.yelp.com/search?find_desc=vet&find_loc=nyc
const SearchResults = (props) => {
console.log(props.bussinesses);
    const history = useHistory()
    const handleClick = (e) => {
        e.preventDefault()
        history.push(`/?find_desc=${e.target.value}`, { url: e.target.name })
    }

    if(!props.bussinesses || !props.bussinesses.length){
        return (<div></div>)
    }

    const searchResults = props.bussinesses.map(b => <SingleResult key= {b.id} bussinesses={b} /> )

    return(
        <div className='search-results'>
            {SingleResult}
            
        </div>
    )
}

export default SearchResults