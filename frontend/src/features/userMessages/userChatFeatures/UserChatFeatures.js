import React from "react";
import { Button } from "react-bootstrap";

const UserChatFeatures = ({ display, setMessage, message, submitMessage }) => {
  return (
    <div style={{ display: display }} className="userChatFeatures">
      <div className="usersChatText">
        <div className="textAreaHolder">
          <form onSubmit={submitMessage}>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </form>
        </div>
      </div>
      <div className="usersChatSendButton">
        <Button onClick={submitMessage}>Send</Button>
      </div>
    </div>
  );
};

export default UserChatFeatures;
