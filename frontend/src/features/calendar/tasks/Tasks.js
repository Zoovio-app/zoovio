import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import {
  pageStyle,
  pageVariants,
  pageTransition,
} from "../../../util/framerStyles";
import TasksDisplay from "../../tasksDisplay/TasksDisplay";
import axios from "axios";
import { apiUrl } from "../../../util/apiUrl";
import { AuthContext } from "../../../providers/AuthContext";
import { useParams } from "react-router-dom";

const Tasks = () => {
  const API = apiUrl();
  const { currentUser } = useContext(AuthContext);
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
        });
        setTasks(res.data.tasks);
      } catch (error) {
        console.log(error);
      }
    };
    getDayTasks();
  }, [API, currentUser.id, date]);

  return (
    <motion.div
      style={pageStyle}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      TASKS
      <TasksDisplay tasks={tasks} />
    </motion.div>
  );
};

export default Tasks;
