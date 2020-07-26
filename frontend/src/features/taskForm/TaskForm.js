import React, { useEffect, useContext, useState } from "react";
import { apiUrl } from "../../util/apiUrl";
import axios from "axios";
import { AuthContext } from "../../providers/AuthContext";

const TaskForm = () => {
  const API = apiUrl();
  const { token, currentUser } = useContext(AuthContext);
  const [allPetNames, setAllPetNames] = useState([]);
  const [dueDate, setDueDate] = useState(new Date().toISOString().slice(0, 10));
  const [allPetID, setAllPetID] = useState([]);
  const [petID, setPetID] = useState("");
  const [newTask, setNewTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/users/tasks/`, {
        pet_id: petID,
        task: newTask,
        due_date: dueDate,
      });
    } catch (err) {
      alert(err.message);
    }
  };

  const petNames = allPetNames.map((el, i) => {
    return (
      <option key={i} value={el.pets[i].id}>
        {" "}
        {el.pets[i].pet_name}{" "}
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
        setAllPetNames([res.data.payload]);
        setAllPetID([res.data.payload.id]);
      } catch (error) {
        setAllPetNames([]);
      }
    };
    fetchPetNames();
  }, [API, currentUser.id, token]);

  return (
    <div>
      <h2>Create new task</h2>
      <form className="tasksForm" onSubmit={handleSubmit}>
        <select onChange={(e) => setPetID(e.target.value)}>
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
        <button className="addTaskButton" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
