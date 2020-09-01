import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import {
  pageStyle,
  pageVariants,
  pageTransition,
} from "../../../util/framerStyles";
import "../css/styles.css";
import TasksDisplay from "../../tasksDisplay/TasksDisplay";
import axios from "axios";
import { apiUrl } from "../../../util/apiUrl";
import { AuthContext } from "../../../providers/AuthContext";
import { useParams } from "react-router-dom";
import AddButton from "../../addButton/AddButton";
import BackButton from "../../backButton/BackButton";

const Tasks = () => {
  const API = apiUrl();
  const { currentUser, token } = useContext(AuthContext);
  const { day } = useParams();
  const date = new Date(day);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getDayTasks = async () => {
      try {
        let res = await axios({
          method: "GET",
          url: `${API}/api/users/tasks/day/${date.getDate()}?user=${
            currentUser.id
          }&year=${date.getFullYear()}&month=${date.getMonth() + 1}`,
          headers: {
            authToken: token,
          },
        });
        setTasks(res.data.tasks);
      } catch (error) {
        console.log(error);
      }
    };
    getDayTasks();
  }, [API, currentUser.id, date, token]);

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      <div className="dayTasksCont">
        <div>
          <h2>Showing tasks for</h2>
          <h3 style={{ color: "#225095" }}>
            {new Date(day).toLocaleDateString()}
          </h3>
        </div>
        <div className="calTasksTop">
          <BackButton location={"calendar"} />
          <AddButton page={"calendar"} />
        </div>
        <div className="calTasksBody">
          <TasksDisplay tasks={tasks} />
        </div>
      </div>
    </motion.div>
  );
};

export default Tasks;
