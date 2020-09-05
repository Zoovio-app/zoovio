import React, { useState, useContext, useRef, useEffect } from "react";
import { handleUpload } from "./helpers/photoUpload";
import { AuthContext } from "../../providers/AuthContext";
import Axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { motion } from "framer-motion";
import { pageTransition, pageVariants } from "../../util/framerStyles";
import Toast from "../toast/Toast";
import BackButton from "../backButton/BackButton";
import { Button } from "react-bootstrap";
import "./css/petForm.css";
import { useDispatch } from "react-redux";
import { setToast } from "../toastSlice/toastSlice";

const PetForm = () => {
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [progress, setProgress] = useState(0);
  const [display, setDisplay] = useState("none");
  const { currentUser, token } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const API = apiUrl();
  const input = useRef();
  const dispatch = useDispatch();

  const handleChange = async (e) => {
    setImage(e.target.files[0]);
  };

  useEffect(() => {
    if (image) handleUpload(setUrl, image, setProgress);
  }, [image]);

  const func = () => {
    input.current.click();
    setDisplay(null);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await Axios({
        method: "POST",
        url: `${API}/api/users/pets`,
        data: {
          owner: currentUser.id,
          pet_name: name,
          img: url,
          dob,
        },
        headers: {
          authToken: token,
        },
      });
      dispatch(setToast(true));
    } catch (error) {
      alert(error);
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <div className="petFormMain">
        <div className="petFormTitle">
          <h1>ZooVio</h1>
        </div>
        <div className="toastDiv">
          <Toast text={"Your pet was succesfully added."} />
        </div>

        <div className="petFormHead">
          <BackButton location={"pets"} id="petFormBack" />
          <div className="petformH1">
            <h1>Add new pet </h1>
          </div>
        </div>
        <div className="petFormAdd">
          <Button onClick={func}>Add image</Button>
        </div>
        <div
          className="petForm"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <form
            onSubmit={onSubmit}
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
            }}
          >
            <div style={{ display: display }}>
              <progress value={progress} max="100" />
            </div>

            <div style={{ display: "none" }}>
              <input ref={input} type="file" onChange={handleChange} />
            </div>
            <input
              className="tasks_input"
              onChange={(e) => setName(e.target.value)}
              placeholder={"name"}
            />
            <input
              className="tasks_input"
              onChange={(e) => setDob(e.target.value)}
              type="date"
            />
            <div className="petFormSubmit">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default PetForm;
