import React, { useEffect, useState, useRef, useContext } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import { AuthContext } from '../../providers/AuthContext';
import DoctorNav from '../docPortal/DoctorNav/DoctorNav';



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
    const [users, setUsers] = useState({1: "dee"});
    const [stream, setStream] = useState();
    const [receivingCall, setReceivingCall] = useState(false);
    const [caller, setCaller] = useState("");
    const [callerSignal, setCallerSignal] = useState();
    const [callAccepted, setCallAccepted] = useState(false);
    const { currentUser } = useContext(AuthContext) 
    const { id } = currentUser

    const userVideo = useRef();
    const partnerVideo = useRef();
    const socket = useRef();


    useEffect(() => {
        socket.current = io.connect("http://localhost:3003");
        navigator.mediaDevices.getUserMedia({ video: true, audio: true }).then(stream => {
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
            console.log(id)
        })
        socket.current.on("allUsers", (users) => {
            setUsers(users);
        })
        console.log(users)

        socket.current.on("hey", (data) => {
            setReceivingCall(true);
            setCaller(data.from);
            setCallerSignal(data.signal);
        })  
    }, []);


    const callPeer = (id) => {
        const peer = new Peer({initiator: true,
            trickle: false,
            config: {
                iceServers: [

                ]
            },
            stream: stream
        });

        peer.on("signal", data => {
            socket.current.emit("callUser", { userToCall: id, signalData: data, from: yourID })
          })
      
          peer.on("stream", stream => {
            if (partnerVideo.current) {
              partnerVideo.current.srcObject = stream;
            }
          });
      
          socket.current.on("callAccepted", signal => {
            setCallAccepted(true);
            peer.signal(signal);
        }) 
    };

        const acceptCall = () => {
            setCallAccepted(true);

            const peer = new Peer({
                initiator: false,
                trickle: false,
                stream: stream,
              });

              peer.on("signal", data => {
                socket.current.emit("acceptCall", { signal: data, to: caller })
              })

              peer.on("stream", stream => {
                partnerVideo.current.srcObject = stream;
              });

              peer.signal(callerSignal);
        }

        let UserVideo;
        if (stream) {
            UserVideo = (
                <Video playsInline muted ref={userVideo} autoPlay />
            );
        }


        let PartnerVideo;
        if (callAccepted) {
            PartnerVideo = (
                <Video playsInline ref={partnerVideo} autoPlay />
            );
        }

        let incomingCall;
        if (receivingCall) {
            incomingCall = (
                <div>
                    <h1>{caller} is calling you</h1>
                    <button onClick={acceptCall}>Accept</button>
                </div>
            )
        };

        return (
            
            <Container>
                <div> 
                    <DoctorNav/>
                </div>

                <div>
                    <Row>
                        {UserVideo}
                        {PartnerVideo}
                    </Row>
                </div>

                <div>
                    <Row>
                        {Object.keys(users).map(key => {
                            if (key === yourID) {
                            return <button onClick={() => callPeer(key)}>Call {key} </button>
                        }
                            return (
                                <div> hello</div>
                            );
                        })}
                    </Row>
                </div>

                <div>
                    <Row>
                        {incomingCall}
                    </Row>
                </div>
          </Container>
          
        )
}




export default VideoChat 