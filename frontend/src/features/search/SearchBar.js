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
              <input class="input" type="text" placeholder="Location"/>
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