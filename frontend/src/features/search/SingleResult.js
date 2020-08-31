import React from "react";
import "./searchCss/SingleResult.css";
import PawRating from "./PawRating";
import doc from "./images/doc.jpg";
import styles from "./searchCss/SearchResults.css";

const SingleResult = (props) => {
  // if (!props.result) {
  //   return <div />;
  // }

  return (
    <div className="single-result">
    <div className='card'>
      <img className="image" src={props.result.image_url} alt="image" />
      <div className="info">
        <h2 class="subtitle">
          <strong> {props.result.name} </strong>
        </h2>
        <p className='phone'>{props.result.display_phone}</p>
        <p className="address">{props.result.location['address1']}</p>
        <p className="address">{props.result.location.city}</p>
        <p className="address">{props.result.location.zip_code}</p>
        <PawRating reviewCount={props.result.review_count} rating={props.result.rating}/>
        <p>
          <span class="tag"></span>
        </p>
      </div>
      <div className="contact">
        
      </div>
    </div>
    </div>
  );
};

export default SingleResult;
