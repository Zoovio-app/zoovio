import React from "react";
import { suggestions } from "./helper";

const SuggestedTexts = ({ setMessage }) => {
  return (
    <div className="sugestedTextMain">
      <div className="sugestedTextCont">
        <div
          onClick={() => setMessage(suggestions[1])}
          className="sugestedText"
        >
          <span>Schedule general checkup</span>
        </div>
        <div
          onClick={() => setMessage(suggestions[2])}
          className="sugestedText"
        >
          <span>Get pet vacinated</span>
        </div>
        <div
          onClick={() => setMessage(suggestions[3])}
          className="sugestedText"
        >
          <span>Request virtual appointment</span>
        </div>
        <div
          onClick={() => setMessage(suggestions[4])}
          className="sugestedText"
        >
          <span>"Thanks!"</span>
        </div>

        <div
          onClick={() => setMessage(suggestions[5])}
          className="sugestedText"
        >
          <span>"yes"</span>
        </div>
      </div>
    </div>
  );
};

export default SuggestedTexts;
