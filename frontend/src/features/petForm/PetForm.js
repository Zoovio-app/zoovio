import React, { useState, useContext, useRef, useEffect } from "react";
import { handleUpload } from "./helpers/photoUpload";
import { AuthContext } from "../../providers/AuthContext";
import Axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();

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
      history.push("/pets");
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div>
      <h1>Create a pet </h1>

      <div style={{ display: "flex", justifyContent: "center" }}>
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
            onChange={(e) => setName(e.target.value)}
            placeholder={"name"}
          />
          <input onChange={(e) => setDob(e.target.value)} type="date" />
          <input type="submit" />
        </form>
        <button onClick={func}>Add image</button>
      </div>
    </div>
  );
};

export default PetForm;
