import React, { useContext, useState, useLayoutEffect } from "react";
import { logOut } from "../../util/firebaseFunctions";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUserInfo,
  userInfoState,
  clearUserInfo,
} from "../userInfo/userInfoSlice";
import TasksDisplay from "../tasksDisplay/TasksDisplay";
import { useHistory } from "react-router-dom";
import { pageTransition, pageVariants } from "../../util/framerStyles";
import { motion } from "framer-motion";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { token, currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const API = apiUrl();
  const state = useSelector(userInfoState);
  const history = useHistory();

  useLayoutEffect(() => {
    const getUserInfo = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/users/${currentUser.id}`,
          headers: {
            authToken: token,
          },
        });
        dispatch(updateUserInfo(res.data.user.pop()));
      } catch (error) {
        console.log(error);
      }
    };
    const timer = setTimeout(() => {
      getUserInfo();
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [token, API, currentUser.id, dispatch]);

  const signOut = () => {
    logOut();
    dispatch(clearUserInfo());
  };

  return isLoading ? (
    <div>Loading.......</div>
  ) : (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <button onClick={signOut}> Log Out</button>
      <h1>hi,{state.user ? state.user.name : null} </h1>
      <button onClick={() => history.push("/tasks/create")}>
        Create New Task
      </button>
      <TasksDisplay />
    </motion.div>
  );
};

export default Home;
