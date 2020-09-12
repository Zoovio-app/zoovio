import React, { useEffect, useState, useRef, useContext } from "react";
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import { AuthContext } from "../../providers/AuthContext";
import DoctorNav from "../docPortal/DoctorNav/DoctorNav";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid orange;
  margin-top: 4.8rem;
  width: 50%;
  height: 45%;
`;

const VideoChat = () => {
  const [yourID, setYourID] = useState("");
  const [users, setUsers] = useState([]);
  const [stream, setStream] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const { currentUser } = useContext(AuthContext);
  const [isCalling, setIsCalling] = useState(false);
  const [callReciever, setCallReciever] = useState("");
  const { id } = currentUser;

  const userVideo = useRef();
  const partnerVideo = useRef();
  const socket = useRef();

  useEffect(() => {
    socket.current = io.connect("http://localhost:3001");
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }

        // if (partnerVideo.current) {
        //     partnerVideo.current.srcObject = stream;
        // }
      });

    socket.current.on("yourID", (id) => {
      setYourID(id);
      console.log(id);
    });
    socket.current.on("allUsers", (users) => {
      setUsers(Object.values(users));
    });
  }, []);

  console.log(users, yourID);
  const callPeer = (id, e) => {
    setIsCalling(true);
    setCallReciever(e.target.value);

    const peer = new Peer({
      initiator: true,
      trickle: false,
      config: {
        iceServers: [],
      },
      stream: stream,
    });

    peer.on("signal", (data) => {
      console.log(data);
      socket.current.emit("callUser", {
        userToCall: id,
        signalData: data,
        from: yourID,
      });
    });

    peer.on("stream", (stream) => {
      if (partnerVideo.current) {
        partnerVideo.current.srcObject = stream;
      }
    });

    socket.current.on("callAccepted", (signal) => {
      setCallAccepted(true);
      peer.signal(signal);
    });

    socket.current.on("callDeclined", (data) => {
      setIsCalling(false);
      setCallReciever("");
    });
  };

  let UserVideo;
  if (stream) {
    UserVideo = <Video playsInline muted ref={userVideo} autoPlay />;
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = <Video playsInline ref={partnerVideo} autoPlay />;
  }

  return (
    <Container>
      <div>
        <DoctorNav />
      </div>

      <div>
        <Row>
          {UserVideo}
          {PartnerVideo}
        </Row>
      </div>

      <div>
        <Row>
          {users.length > 0
            ? users.map((user) => {
                if (user.socketId !== yourID) {
                  return (
                    <button
                      value={user.name}
                      key={user.socketId}
                      onClick={(e) => callPeer(user.socketId, e)}
                    >
                      Call {user.name}{" "}
                    </button>
                  );
                }
                return <div> hello</div>;
              })
            : null}

          {isCalling ? <div>calling{callReciever}</div> : null}
        </Row>
      </div>
    </Container>
  );
};

export default VideoChat;
