import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Toast } from "react-bootstrap";
import "./css/toast.css";
import { toastState, setToast } from "../toastSlice/toastSlice";

const Toastt = () => {
  const show = useSelector(toastState);
  const dispatch = useDispatch();
  return (
    <>
      <Toast
        style={{
          alignSelf: "flex-start",
          flexBasis: " unset",
          marginBottom: "unset",
          position: "relative",
          zIndex: "-1",
          backgroundColor: "#ffffff",
          opacity: "1",
        }}
        animation={true}
        delay={3000}
        onClose={() => dispatch(setToast(false))}
        show={show}
        autohide
      >
        <Toast.Header>
          <img src="holder.js/20x20?text=%20" className="rounded mr-2" alt="" />
          <strong className="mr-auto">Success!</strong>
        </Toast.Header>
        <Toast.Body>Your task was successfully added. </Toast.Body>
      </Toast>
    </>
  );
};

export default Toastt;
