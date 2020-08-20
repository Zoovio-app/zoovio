import React from 'react'

const SearchBar = () => {

        return(
            <div>
            <div class="field has-addons">
            
            <p class="control">
              <button class="button is-static">Search</button>
               </p>
               <div class="field has-addons">
               <div class="control is-expanded">
                 <div class="select is-fullwidth">
                   <select name="Search for Service">
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
            <p class="control">
              <button class="button is-static">Near</button>
               </p>
            <p class="control">
              <input class="input" type="text" placeholder="Location, City, Zip Code"/>
            </p>
            <button class="button">
                <span class="icon is-small">
                    <i class="fas fa-paw"></i>
                </span>
            </button>
            
            
          </div>
            </div>
        )
}

export default SearchBar