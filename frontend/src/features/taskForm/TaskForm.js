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
import { useDispatch, useSelector } from "react-redux";
import { setToast } from "../toastSlice/toastSlice";
import { taskState, setTask, clearForm } from "./taskFormSlice";
import logo from "../../assets/img/logo.png";

const date = new Date();

const TaskForm = () => {
  const API = apiUrl();
  const { token, currentUser } = useContext(AuthContext);
  const [allPetNames, setAllPetNames] = useState([]);
  const [dueTime, setDueTime] = useState(date);
  const [petID, setPetID] = useState("");
  const dispatch = useDispatch();
  const { page } = useParams();
  const task = useSelector(taskState);
  const [dateDis, setDateDis] = useState("none");
  const [dateBox, setDateBox] = useState(null);

  const func2 = () => {
    setDateDis(null);
    setDateBox("none");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios({
        method: "POST",
        url: `${API}/api/users/tasks/`,
        data: {
          pet_id: petID,
          task: task,
          due_date: new Date(dueTime.slice(0, 10)),
          due_time: new Date(dueTime).toLocaleTimeString(),
          dueTime: new Date(dueTime).toLocaleTimeString(),
        },
        headers: {
          authToken: token,
        },
      });
      dispatch(setToast(true));
      dispatch(clearForm());
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
        <div>
          <img style={{ height: "7vh" }} alt="" src={logo} />
        </div>
        <div className="toastDiv">
          <Toast text={"Your task was successfully added."} />
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
              defaultValue={"a"}
              required
              className="tasks_input"
              onChange={(e) => setPetID(e.target.value)}
            >
              <option style={{ color: "#82878e" }} value={"a"} disabled>
                Choose Pet
              </option>
              {petNames}
            </select>

            <input
              required
              className="tasks_input"
              type="text"
              placeholder="New task"
              onChange={(e) => dispatch(setTask(e.target.value))}
              value={task}
            />
            <div
              onClick={func2}
              style={{ height: "5.5vh", display: dateBox }}
              className="tasks_input"
            >
              <p style={{ color: "#82878e", margin: "unset" }}>Date & Time</p>
            </div>
            <div style={{ display: dateDis }}>
              <input
                required
                type="datetime-local"
                className="tasks_input"
                max="24:00"
                onChange={(e) => setDueTime(e.target.value)}
              />
            </div>

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
