import React, { useContext, useEffect, useState } from "react";
import { pageTransition, pageVariants } from "../../util/framerStyles";
import { motion } from "framer-motion";
import { AuthContext } from "../../providers/AuthContext";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { useHistory } from "react-router-dom";
import PetsDisplay from "../petsDisplay/PetsDisplay";

const Pets = () => {
  const { currentUser, token } = useContext(AuthContext);
  const [pets, setPets] = useState([]);
  const API = apiUrl();
  const history = useHistory();

  useEffect(() => {
    const getAllPets = async () => {
      try {
        let res = await axios({
          method: "GET",
          url: `${API}/api/users/pets/${currentUser.id}`,
          headers: {
            authToken: token,
          },
        });
        setPets(res.data.payload.pets);
      } catch (error) {
        alert(error);
      }
    };
    getAllPets();
  }, [API, currentUser.id, token]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <h1>Pets</h1>
      <button onClick={() => history.push("/pets/create")}>Add new pet</button>
      <PetsDisplay pets={pets} />
    </motion.div>
  );
};

export default Pets;
