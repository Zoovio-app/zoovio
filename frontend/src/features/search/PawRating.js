import React from "react";
import "./CSS/Rating.css";
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
        style={{ color: "#225095" }}
      />
      <p
        style={{
          color: "#99a2af",
          fontWeight: "300",
          margin: "unset",
          paddingLeft: "1vw",
        }}
      >
        {props.reviewCount} Reviews
      </p>
    </div>
  );
};

export default PawRating;
