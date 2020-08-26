import React, { useState, useHistory } from 'react'
import useReactRouter from 'use-react-router'
import Search from './Search'
const SearchBar = (props) => {



  const [term, setTerm] = useState(props.term)
  const [location, setLocation] = useState(props.location)
  const [results, setResults] = useState()
  const {history} = useReactRouter()

 
 
  const handleSubmit = (e) => {
    if(props.search && typeof props.search === 'const'){
      props.search(term,location)
      }
    e.preventDefault()
    console.log(term,location)
    
  }

  // const searchHistoryResults = (term, location) => {
  //   const urlEncodedSelect = encodeURI(term)
  //   const urlEncodedLocation = encodeURI(location)
  //   history.push(`/search?find_desc=${urlEncodedSelect}&find_loc=${urlEncodedLocation}`)
  // }
  
        return(
          
            <form onSubmit={handleSubmit}>
            <div class="field has-addons">
            
            <p class="control">
              <button class="button is-static">Search</button>
               </p>
               <div class="field has-addons">
               <div class="control is-expanded">
                 <div class="select is-fullwidth">
                   <select onChange={(e) => setTerm(e.target.value)} value={term}>
                   <option value ="" disabled selected>Choose a Service</option>
                     <option value="Veterinarian">Veterinarian</option>
                     <option value="Pet Shop">Pet Shop</option>
                     <option value="Pet Grooming">Pet Grooming</option>
                     <option value="Pet Adoption">Pet Adoption</option>
                     <option value="Pet Shelter">Pet Shelter</option>
                     <option value="Pet Daycare">Pet Daycare</option>
                     <option value="Pet Training">Pet Training</option>
                   </select>
                 </div>
               </div>
               <div class="control">
               </div>
             </div>
            <div class="control">
              <div class="button is-static">Near</div>
               </div>
            <p class="control">
              <input class="input" type="text" onChange={(e) => setLocation(e.target.value)} placeholder="Location, City, Zip Code" />
            </p>
            <button class="button" onClick = {handleSubmit} value={location}>
                <span class="icon is-small">
                    <i class="fas fa-paw"></i>
                </span>
            </button>

            
          </div>
            </form>
            
            
        )
}

export default SearchBar