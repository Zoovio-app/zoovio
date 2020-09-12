import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { apiUrl } from "../../util/apiUrl";
import { acceptCall, declineCall } from "./helper";

import styled from "styled-components";

const Video1 = styled.video`
  border: 1px solid orange;
  margin-top: 4.8rem;
  width: 25%;
  height: 25%;
`;
const Video2 = styled.video`
  border: 1px solid orange;
  margin-top: 4.8rem;
  width: 15%;
  height: 15%;
`;
const UserVideoChat = () => {
  const socket = useRef();
  const userVideo = useRef();
  const partnerVideo = useRef();
  const API = apiUrl();
  const [stream, setStream] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [yourID, setYourID] = useState("");
  const [display, setDisplay] = useState("none");
  const args = {
    setCallAccepted,
    setDisplay,
    socket,
    callerSignal,
    stream,
    caller,
    partnerVideo,
    setCaller,
    setReceivingCall,
  };

  const accept = () => {
    acceptCall(args);
  };

  const decline = () => {
    declineCall(args);
  };

  useEffect(() => {
    socket.current = io.connect(API);

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo) {
          userVideo.current.srcObject = stream;
        }
      });

    socket.current.emit("currentUser", { name: "danny" });

    socket.current.on("yourID", (id) => {
      setYourID(id);
    });

    socket.current.on("hey", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, [API]);

  return (
    <div>
      <div className="incomingDiv">
        {receivingCall ? (
          <>
            <h1>{caller} is calling you</h1>
            <button onClick={accept}>Accept</button>{" "}
            <button onClick={decline}>Decline</button>
          </>
        ) : null}
      </div>

      <div className="myVideo">
        {stream ? (
          <Video2
            style={{ display: display }}
            playsInline
            muted
            ref={userVideo}
            autoPlay
          />
        ) : null}
      </div>

      <div className="callerDiv">
        {callAccepted ? (
          <Video1 playsInline ref={partnerVideo} autoPlay />
        ) : null}
      </div>
    </div>
  );
};

export default UserVideoChat;
