import React from "react";
import back from "../../images/back.png";
import { useHistory } from "react-router-dom";

const BackButton = ({ location }) => {
  const history = useHistory();

  return (
    <div onClick={() => history.push(`/${location}`)} className="taskFormBack">
      <img alt="" src={back} />
    </div>
  );
};

export default BackButton;
