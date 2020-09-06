import React, { useState } from "react";
import axios from "axios";
const { REACT_APP_YELP_API } = process.env;

const SearchBar = (props) => {
  console.log(props);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");
  const headers = {
    Authorization: `Bearer ${REACT_APP_YELP_API}`,
  };

  const fetchData = async () => {
    const Authorization = `Bearer ${REACT_APP_YELP_API}`;
    const BASE_URL_SEARCH = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=${10}`;
    const BASE_URL = "https://api.yelp.com/v3/";
    const HEROKU_SEARCH = `https://cors-anywhere.herokuapp.com/${BASE_URL_SEARCH}`;
    const HEROKU = `https://cors-anywhere.herokuapp.com/?${BASE_URL}`;

    // https://www.yelp.com/search?find_desc=vet&find_loc=nyc
    try {
      let res = await axios.get(HEROKU_SEARCH, { headers });
      props.setResult(res.data.businesses);
    } catch (error) {
      console.log(error);
      props.setResult([]);
    }
  };

  const handleSubmit = (e) => {
    fetchData(term, location);

    e.preventDefault();
    console.log(term, location);
  };

  const results = () => {};

  return (
    <div>
      <p>In a rush?</p> <button> Speak to a vet!</button>
      <form onSubmit={handleSubmit}>
        <div class="field has-addons">
          <p class="control">
            <button class="button is-static">Search</button>
          </p>
          <div class="field has-addons">
            <div class="control is-expanded">
              <div class="select is-fullwidth">
                <select onChange={(e) => setTerm(e.target.value)} value={term}>
                  <option value="" disabled selected>
                    Choose a Service
                  </option>
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
            <div class="control"></div>
          </div>
          <div class="control">
            <div class="button is-static">Near</div>
          </div>
          <p class="control">
            <input
              class="input"
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              placeholder="City, Zipcode"
            />
          </p>
          <button class="button" onClick={handleSubmit} value={location}>
            <span class="icon is-small">
              <i class="fas fa-paw"></i>
            </span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

//"placeholder="Location, City, Zip Code"
