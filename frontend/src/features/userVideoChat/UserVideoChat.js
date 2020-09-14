import React, { useEffect, useState, useRef } from "react";
import io from "socket.io-client";
import { apiUrl } from "../../util/apiUrl";
import { acceptCall, declineCall } from "./helper";
import styled from "styled-components";
import "../userMessages/incomingCallDiv/css/incoming.css";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { userInfoState } from "../userInfo/userInfoSlice";
import "./css/userVideoChat.css";

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
  const { user } = useSelector(userInfoState);
  const namee = user ? user.name : "Samm";
  const [peer, setPeer] = useState("");

  const args = {
    setCallAccepted,
    socket,
    callerSignal,
    stream,
    caller,
    partnerVideo,
    setCaller,
    setPeer,
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

  const endCall = () => {
    peer.destroy();
    console.log(peer, "here");
    socket.current.emit("endCall", caller);
    setCallAccepted(false);
    setChatBoxDisplay("");
    setVideoDisplay("none");
    setStream("");
    socket.current.emit("disconnect");
  };

  useEffect(() => {
    socket.current = io.connect(API);
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        setStream(stream);
        if (userVideo) {
          userVideo.current.srcObject = stream;
        }
      });

    socket.current.emit("currentUser", { name: namee });

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
    return () => {
      return socket.current.emit("disconnect");
    };
    /////////
  }, [API, setToast, socket]);

  console.log(peer);

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
              <Video1 playsInline ref={partnerVideo} autoPlay />
              <Button onClick={endCall}>End Call</Button>
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default UserVideoChat;
