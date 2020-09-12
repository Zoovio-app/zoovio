import React from "react";
import "./css/incoming.css";
import { Button } from "react-bootstrap";

const IncomingCall = ({
  receivingCall,
  caller,
  accept,
  decline,
  incomingDisplay,
}) => {
  return (
    <div style={{ display: incomingDisplay }} className="incomingDiv">
      <div className="incomingCont">
        {receivingCall ? (
          <>
            <h2 className="blink_me">Incoming Calling</h2>
            <Button onClick={accept}>Accept</Button>{" "}
            <Button onClick={decline}>Decline</Button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default IncomingCall;
