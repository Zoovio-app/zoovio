import React, { useState } from "react";
import "./CSS/css.css";
import axios from "axios";
import { Button } from "react-bootstrap";

const { REACT_APP_YELP_API } = process.env;

const SearchBar = (props) => {
  console.log(props);
  const [term, setTerm] = useState("");
  const [location, setLocation] = useState("");

  const fetchData = async () => {
    const BASE_URL_SEARCH = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&limit=${2}`;
    const HEROKU_SEARCH = `https://cors-anywhere.herokuapp.com/${BASE_URL_SEARCH}`;

    try {
      let res = await axios.get(HEROKU_SEARCH, {
        headers: {
          Authorization: `Bearer ${REACT_APP_YELP_API}`,
        },
      });
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

  return (
    <div className="resPage">
      <div className="searchH1">
        <h1>ZooVio</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="inputsSearchMain">
          <div>
            <div className="findDiv">
              <p>Find</p>
            </div>
          </div>
          <div className="selectTopMain">
            <div className="control is-expanded">
              <div className="select is-fullwidth">
                <div className="selectDiv">
                  <select
                    id="searchInputs"
                    defaultValue={"val"}
                    className="tasks_input"
                    onChange={(e) => setTerm(e.target.value)}
                    // value={term}
                  >
                    <option className="opp" disabled value={"val"}>
                      Vets, Groomers, etc...
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
            </div>
            <div className="control"></div>
          </div>
          <div className="searchInputDiv">
            <div className="searchInputP">
              <div className="searchInputPp">
                <p>Near</p>
              </div>
            </div>
            <div className="searchInputCont">
              <input
                id="searchInputs"
                className="tasks_input"
                type="text"
                onChange={(e) => setLocation(e.target.value)}
                placeholder="City, Zipcode"
              />
            </div>
          </div>

          <div className="searchButDiv">
            <Button className="button" onClick={handleSubmit} value={location}>
              <span className="icon is-small">
                <i className="fas fa-paw"></i>
              </span>
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
