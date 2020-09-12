import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { apiUrl } from "../../util/apiUrl";
import { acceptCall, declineCall } from "./helper";
import styled from "styled-components";
// import IncomingCall from "../userMessages/incomingCallDiv/IncomingCall";
import "../userMessages/incomingCallDiv/css/incoming.css";
import { Button } from "react-bootstrap";

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

let count = 0;

const UserVideoChat = ({
  setToast,
  videoDisplay,
  setVideoDisplay,
  setChatBoxDisplay,
}) => {
  const socket = useRef();
  const userVideo = useRef();
  const partnerVideo = useRef();
  const API = apiUrl();

  const [stream, setStream] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState("");
  const [yourID, setYourID] = useState("");
  const [incomingDisplay, setIncomingDisplay] = useState("none");

  const args = {
    setCallAccepted,
    socket,
    callerSignal,
    stream,
    caller,
    partnerVideo,
    setCaller,
  };

  const accept = () => {
    acceptCall(args);
    setChatBoxDisplay("none");
    setVideoDisplay("");
    setToast("");
    setIncomingDisplay("none");
  };

  const decline = () => {
    declineCall(args);
    setToast("");
    setIncomingDisplay("none");
    count = 0;
  };

  const endCall = () => {};

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
      if (count < 1) {
        setToast("none");
        setIncomingDisplay("");
        count++;
      } else {
        count = 0;
      }
      setCaller(data.from);
      setCallerSignal(data.signal);
    });

    /////////
  }, [API, setToast]);

  return (
    <>
      <div style={{ display: incomingDisplay }} className="incomingDiv">
        <div className="incomingCont">
          <h2 className="blink_me">Incoming Call...</h2>
          <Button onClick={accept}>Accept</Button>{" "}
          <Button onClick={decline}>Decline</Button>
        </div>
      </div>

      <div style={{ display: videoDisplay }} className="videoChatBox">
        <div style={{ display: "none" }} className="myVideo">
          {stream ? (
            <Video2 playsInline muted ref={userVideo} autoPlay />
          ) : null}
        </div>

        <div className="callerDiv">
          {callAccepted ? (
            <>
              <Button>End Call</Button>
              <Video1 playsInline ref={partnerVideo} autoPlay />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default UserVideoChat;
