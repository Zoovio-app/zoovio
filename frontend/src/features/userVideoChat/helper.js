import Peer from "simple-peer";

export const acceptCall = ({
  setCallAccepted,
  socket,
  callerSignal,
  stream,
  caller,
  partnerVideo,
}) => {
  setCallAccepted(true);

  const peer = new Peer({
    initiator: false,
    trickle: false,
    stream: stream,
  });

  peer.on("signal", (data) => {
    socket.current.emit("acceptCall", { signal: data, to: caller });
  });

  peer.on("stream", (stream) => {
    partnerVideo.current.srcObject = stream;
  });

  peer.signal(callerSignal);
};

export const declineCall = ({ socket, caller, setCaller }) => {
  socket.current.emit("declineCall", { name: "danny", to: caller });
  setCaller("");
};

export const endCall = ({ socket }) => {};
