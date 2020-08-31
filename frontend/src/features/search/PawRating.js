import React from "react";
import "./searchCss/Rating.css";
import Rating from "react-rating";
import WhitePaw from "./images/WhitePaw.png";
import HalfPaw from "./images/HalfPaw.png";
import GrayPaw2 from "./images/GrayPaw2.png";

const PawRating = (props) => {
  return (
    <div className="Rating">
      <Rating
        emptySymbol="far fa-star"
        fullSymbol="fas fa-star"
        fractions={2}
        readonly
        initialRating={props.rating}
      />
      <p>{props.reviewCount} Reviews</p>
    </div>
  );
};

export default PawRating;

// emptySymbol= <img src={WhitePaw} className="WhitePaw"/>
// fullSymbol="fas fa-paw fa-1x"
