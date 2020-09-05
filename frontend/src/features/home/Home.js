import React, { useContext, useState, useLayoutEffect } from "react";
import "./css/home.css";
import axios from "axios";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from "../../providers/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { updateUserInfo, userInfoState } from "../userInfo/userInfoSlice";
import TasksDisplay from "../tasksDisplay/TasksDisplay";
import { pageTransition, pageVariants } from "../../util/framerStyles";
import { motion } from "framer-motion";
import AddButton from "../addButton/AddButton";

const date = new Date();
let apiCalls = 0;

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { token, currentUser } = useContext(AuthContext);
  const dispatch = useDispatch();
  const API = apiUrl();
  const state = useSelector(userInfoState);

  const [tasks, setTasks] = useState([]);

  useLayoutEffect(() => {
    const getUserInfo = async () => {
      try {
        let rez = await axios({
          method: "GET",
          url: `${API}/api/users/tasks/day/${date.getDate()}?user=${
            currentUser.id
          }&year=${date.getFullYear()}&month=${date.getMonth() + 1}`,

          headers: {
            authToken: token,
          },
        });
        setTasks(rez.data.tasks);
        let res = await axios({
          method: "get",
          url: `${API}/api/users/${currentUser.id}`,
          headers: {
            authToken: token,
          },
        });
        dispatch(updateUserInfo(res.data.user.pop()));
      } catch (error) {
        if (apiCalls <= 2) {
          apiCalls += 1;
          getUserInfo();
        }
        console.log(error);
      }
    };
    const timer = setTimeout(() => {
      getUserInfo();
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [API, currentUser.id, dispatch, token]);

  return isLoading ? (
    <div style={{ height: "40vh" }}>Loading.......</div>
  ) : (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <div className="homeCont">
        <h1>hi,{state.user ? state.user.name : null} </h1>
        <AddButton page={"home"} />
        <TasksDisplay tasks={tasks} />
      </div>
    </motion.div>
  );
};

export default Home;
