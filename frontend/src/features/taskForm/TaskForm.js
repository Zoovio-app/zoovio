import React, { useEffect, useContext, useState } from "react";
import { apiUrl } from "../../util/apiUrl";
import axios from "axios";
import { AuthContext } from "../../providers/AuthContext";
import { pageVariants, pageTransition } from "../../util/framerStyles";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import "./css/taskForm.css";
import { Button } from "react-bootstrap";
import BackButton from "../backButton/BackButton";
import Toast from "../toast/Toast";
import { useDispatch } from "react-redux";
import { setToast } from "../toastSlice/toastSlice";

const date = new Date();

const TaskForm = () => {
  const API = apiUrl();
  const { token, currentUser } = useContext(AuthContext);
  const [allPetNames, setAllPetNames] = useState([]);
  const [dueTime, setDueTime] = useState(date);
  const [petID, setPetID] = useState("");
  const [newTask, setNewTask] = useState("");
  const dispatch = useDispatch();
  const { page } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios({
        method: "POST",
        url: `${API}/api/users/tasks/`,
        data: {
          pet_id: petID,
          task: newTask,
          due_date: new Date(dueTime.slice(0, 10)),
          due_time: new Date(dueTime).toLocaleTimeString(),
          dueTime: new Date(dueTime).toLocaleTimeString(),
        },
        headers: {
          authToken: token,
        },
      });
      dispatch(setToast(true));
    } catch (err) {
      alert(err.message);
    }
  };

  const petNames = allPetNames.map((el, i) => {
    return (
      <option key={i} value={el.id}>
        {" "}
        {el.pet_name}{" "}
      </option>
    );
  });

  useEffect(() => {
    const fetchPetNames = async () => {
      try {
        let res = await axios({
          method: "get",
          url: `${API}/api/users/pets/${currentUser.id}`,
          headers: {
            AuthToken: token,
          },
        });

        setAllPetNames(res.data.payload.pets);
      } catch (error) {
        setAllPetNames([]);
      }
    };
    fetchPetNames();
  }, [API, currentUser.id, token]);

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      transition={pageTransition}
      variants={pageVariants}
    >
      <div className="taskFormMain">
        <div className="toastDiv">
          <Toast />
        </div>
        <div className="taskFormHead">
          <BackButton location={page} />
          <div className="taskFormH2">
            <h2>Create new task</h2>
          </div>
        </div>
        <div className="tasksForm">
          <form onSubmit={handleSubmit}>
            <select
              required
              className="tasks_input"
              onChange={(e) => setPetID(e.target.value)}
            >
              <option selected disabled>
                Choose Pet
              </option>
              {petNames}
            </select>

            <input
              required
              className="tasks_input"
              type="text"
              placeholder="New task"
              onChange={(e) => setNewTask(e.target.value)}
              value={newTask}
            />
            <input
              required
              type="datetime-local"
              className="tasks_input"
              max="24:00"
              onChange={(e) => setDueTime(e.target.value)}
            />

            <Button variant="primary" type="submit">
              Add
            </Button>
          </form>
        </div>
      </div>
    </motion.div>
  );
};

export default TaskForm;
