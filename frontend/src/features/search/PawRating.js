import React from "react";
import "./searchCss/Rating.css";
import Rating from "react-rating";


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

