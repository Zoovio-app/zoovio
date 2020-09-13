import React from "react";
import { Link } from "react-router-dom";
import img from "../../../images/nomessages.png";

const SearchPrompt = () => {
  return (
    <div className="searchPropmt">
      <div className="searchPromtP">
        <p>
          You have no active conversations click <Link to="/search">Here</Link>{" "}
        </p>

        <p>
          to navigate to the medical page to search for a service provider and
          initate communication.
        </p>
      </div>
      <div className="promptImgDiv">
        <img alt="" src={img} />
      </div>
    </div>
  );
};

export default SearchPrompt;
