import React from "react";
import "./css/addButton.css";
import { useHistory } from "react-router-dom";
import plus from "../../images/plus.png";
const AddButton = ({ page, pets = false }) => {
  const history = useHistory();
  return (
    <div
      onClick={() =>
        history.push(pets ? "/pets/create" : `/tasks/create/${page}`)
      }
      className="addButton"
    >
      <img alt="" src={plus} />
      <svg
        style={{ height: "25vh" }}
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#225095"
          d="M39,-55.5C48.7,-46.7,53.4,-32.8,58.1,-18.8C62.7,-4.8,67.3,9.3,61.3,17.5C55.3,25.8,38.8,28.2,26.8,32.1C14.8,36.1,7.4,41.5,0.2,41.3C-7,41,-14.1,35,-21.1,29.5C-28.2,24,-35.2,18.8,-44.4,9.8C-53.7,0.9,-65.1,-12,-61.5,-19C-57.9,-26,-39.2,-27.2,-26.5,-35C-13.7,-42.8,-6.9,-57.2,3.9,-62.6C14.7,-67.9,29.3,-64.2,39,-55.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default AddButton;
