import React from "react";
import "./css/petDisplay.css";
const PetsDisplay = ({ pets }) => {
  const petss = pets.map((pet) => {
    return (
      <div className="petCard" key={pet.id}>
        <div className="petCardImg">
          <img alt="" src={pet.img} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <span style={{ fontWeight: "bold" }}>{pet.pet_name}</span>
        </div>
        <div>
          <span>{pet.dob}</span>
        </div>
      </div>
    );
  });

  return <div className="pets">{petss}</div>;
};

export default PetsDisplay;
