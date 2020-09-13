import Peer from "simple-peer";

export const acceptCall = ({
  setCallAccepted,
  socket,
  callerSignal,
  stream,
  caller,
  partnerVideo,
  setPeer,
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

  setPeer(peer);
};

export const declineCall = ({ socket, caller, setCaller, name }) => {
  socket.current.emit("declineCall", { name, to: caller });
  setCaller("");
};

export const endCall = ({ socket }) => {};
