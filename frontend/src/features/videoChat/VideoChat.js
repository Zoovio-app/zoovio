import React, { useEffect, useState, useRef, useContext } from 'react';
import io from "socket.io-client";
import Peer from "simple-peer";
import styled from "styled-components";
import { AuthContext } from '../../providers/AuthContext';



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
      
        
    };


        let UserVideo;
        if (stream) {
            UserVideo = (
                <Video playsInline muted ref={userVideo} autoPlay />
            );
        }



       

        return (
            
            <Container>
            <Row>
              {UserVideo}
            </Row>
            
           
          </Container>
          
        )
}




export default VideoChat 