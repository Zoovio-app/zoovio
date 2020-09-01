import React, { useState } from "react";
import { Toast } from "react-bootstrap";
import "./css/toast.css";

const Toastt = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <Toast
        style={{
          alignSelf: "flex-start",
          flexBasis: " unset",
          marginBottom: "unset",
          position: "relative",
          zIndex: "-1",
        }}
        animation={true}
        delay={3000}
        onClose={() => setShow(false)}
        show={show}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Bootstrap</strong>
          <small>11 mins ago</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
      </Toast>
    </>
  );
};

export default Toastt;
