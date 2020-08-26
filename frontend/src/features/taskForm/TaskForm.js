import React, { useEffect, useContext, useState } from "react";
import { apiUrl } from "../../util/apiUrl";
import axios from "axios";
import { AuthContext } from "../../providers/AuthContext";
import { pageVariants, pageTransition } from "../../util/framerStyles";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";
import "./css/taskForm.css";

const date = new Date();

const TaskForm = () => {
  const API = apiUrl();
  const { token, currentUser } = useContext(AuthContext);
  const [allPetNames, setAllPetNames] = useState([]);
  const [dueDate, setDueDate] = useState(
    date.toLocaleDateString("pt-br").split("/").reverse().join("-")
  );
  const [petID, setPetID] = useState("");
  const [newTask, setNewTask] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios({
        method: "POST",
        url: `${API}/api/users/tasks/`,
        data: {
          pet_id: petID,
          task: newTask,
          due_date: dueDate,
        },
        headers: {
          authToken: token,
        },
      });

      history.push("/home");
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
        // debugger;
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
      <h2>Create new task</h2>
      <form className="tasksForm" onSubmit={handleSubmit}>
        <select
          className="tasks_input"
          onChange={(e) => setPetID(e.target.value)}
        >
          <option>Choose Pet</option>
          {petNames}
        </select>

        <input
          className="tasks_input"
          type="text"
          placeholder="New task"
          onChange={(e) => setNewTask(e.target.value)}
          value={newTask}
        />
        <input
          className="tasks_input"
          type="date"
          placeholder="Pick a Date"
          onChange={(e) => setDueDate(e.target.value)}
          value={dueDate}
        />
        <button className="tasks_input addTaskButton" type="submit">
          Add
        </button>
      </form>
    </motion.div>
  );
};

export default TaskForm;
