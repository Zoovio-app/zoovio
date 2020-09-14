import React, { useContext, useEffect, useState } from "react";
import { pageTransition, pageVariants } from "../../util/framerStyles";
import { motion } from "framer-motion";
import { AuthContext } from "../../providers/AuthContext";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import PetsDisplay from "../petsDisplay/PetsDisplay";
import AddButton from "../addButton/AddButton";
import logo from "../../assets/img/logo.png";
import "./css/pets.css";

const Pets = () => {
  const { currentUser, token } = useContext(AuthContext);
  const [pets, setPets] = useState([]);
  const API = apiUrl();

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
        console.log(error);
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
      <div className="petsMain">
        <div className="petsMainTitle">
          <img style={{ height: "12vh" }} alt="" src={logo} />
        </div>
        <div className="petsAdd">
          <AddButton pets={true}>Add new pet</AddButton>
        </div>
        <div className="PetCardsDiv">
          <PetsDisplay pets={pets} />
        </div>
      </div>
    </motion.div>
  );
};

export default Pets;
