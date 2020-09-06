import React from "react";
import "./css/petDisplay.css";
import Moment from "moment";
import { extendMoment } from "moment-range";
import { getAge } from "./helpers/helpers";
const moment = extendMoment(Moment);

const PetsDisplay = ({ pets }) => {
  const petss = pets.map((pet) => {
    return (
      <div className="petCard" key={pet.id}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontWeight: "bold", color: "#225095" }}>
            {pet.pet_name}
          </span>
        </div>
        <div className="petCardImg">
          <img alt="" src={pet.img} />
        </div>
        <div className="ageSpan">
          <span>{`Age ${getAge(moment, pet.dob)}`}</span>
        </div>
      </div>
    );
  });

  return <div className="pets">{petss}</div>;
};

export default PetsDisplay;
