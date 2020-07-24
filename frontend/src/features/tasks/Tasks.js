import React, { useState, useEffect, useContext } from "react";
import { apiUrl } from "../../util/apiUrl";
import { AuthContext } from '../../providers/AuthContext';
import axios from "axios";

const Tasks = () => {
  const [newTask, setNewTask] = useState("");
  const [petID, setPetID] = useState("");
  const [allPetNames, setAllPetNames] = useState([]);
  const [dueDate, setDueDate] = useState(null);
  const [taskList, setTaskList] = useState([]);
  const [allUsersTasks, setAllUsersTasks] = useState([]);
  const [allPetID, setAllPetID] = useState([]);
  const { token, currentUser } = useContext(AuthContext);
  const API = apiUrl();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/api/users/tasks/`, {
        pet_id: petID,
        task: newTask,
        due_date: dueDate
      });
    } catch (err) {
      alert(err.message);
    }
  };

  const fetchTasks = async () => {
    try {
        let res = await axios({
            method: "get",
            url: `${API}/api/users/tasks/pet/1`
        });
        setTaskList([res.data.payload.tasks]);
    } catch(error) {
        setTaskList([]);
    }
  }

  const fetchPetNames = async () => {
      try {
        let res = await axios({
            method: "get",
            url: `${API}/api/users/pets/${currentUser.id}`,
            headers: {
                'AuthToken': token
            }
        });
        setAllPetNames([res.data.payload]);
        setAllPetID([res.data.payload.id])
      } catch(error) {
        setAllPetNames([]);
      }
  }

  const fetchAllUsersTasks = async () => {
      try {
        let res = await axios({
            method: "get",
            url: `${API}/api/users/tasks/${currentUser.id}`,
            headers: {
                'AuthToken': token
            }
        });
        debugger;
        setAllUsersTasks(res.data.payload.tasks);
      } catch(error) {
        setAllUsersTasks([]);
      }
  }

  useEffect(() => {
    fetchPetNames();
    fetchTasks();
    fetchAllUsersTasks();
  }, [])

  const tasksFeed = taskList.map((currentTask, i) => {
    return(
        <div className="taskFeed">
            <p>{currentTask[i].pet_name}</p>
            <p>{currentTask[i].task}</p>
            <p>{currentTask[i].due_date}</p>
        </div>
    )
  })

  const allTasks = allUsersTasks.map((userTask) => {
    return(
        <div className="allUsersTasks">
            <p>{userTask.pet_name}</p>
            <p>{userTask.task}</p>
            <p>{userTask.due_date}</p>
        </div>
      )
  })


const petNames = allPetNames.map((el, i) => {
    return <option key={i} value={el.pets[i].id}> {el.pets[i].pet_name} </option>
})

  return (
      <div>
        <form className="tasksForm" onSubmit={handleSubmit}>
        <select onChange={(e) => setPetID(e.target.value)}>
            <option>Choose Pet</option>
            {petNames}
        </select>
        {/* <input
            className="tasks_input"
            type="text"
            placeholder="Choose Pet"
            onChange={(e) => setPetName(e.target.value)}
            value={petName}
        /> */}
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
        <div className="showTasks">
            {/* {tasksFeed} */}
            {allTasks}
        </div>
      </div>
  );
};

export default Tasks;