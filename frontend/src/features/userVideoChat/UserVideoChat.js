import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { apiUrl } from "../../util/apiUrl";
import { acceptCall, declineCall } from "./helper";
import styled from "styled-components";
import IncomingCall from "../userMessages/incomingCallDiv/IncomingCall";

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
const UserVideoChat = ({ setToast }) => {
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
  const [incomingDisplay, setIncomingDisplay] = useState("none");
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
    setToast("");
    setIncomingDisplay("none");
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
      setToast("none");
      setIncomingDisplay("");
      setCaller(data.from);
      setCallerSignal(data.signal);
    });
  }, [API, setToast]);

  return (
    <>
      <IncomingCall
        receivingCall={receivingCall}
        caller={caller}
        accept={accept}
        decline={decline}
        incomingDisplay={incomingDisplay}
      />

      <div className="videoChatBox">
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
    </>
  );
};

export default UserVideoChat;
