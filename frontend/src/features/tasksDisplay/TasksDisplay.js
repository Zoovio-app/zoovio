import React from "react";
import "./css/display.css";

const TasksDisplay = ({ tasks = [] }) => {
  if (tasks.length === 0)
    return (
      <div>
        <h1>NO TASKS FOR THIS DATE</h1>
      </div>
    );

  const tasksMap = tasks.map((task) => {
    return (
      <div className="allUsersTasks" key={task.task_id}>
        <p className="petName">{task.pet_name}</p>
        <p className="taskContent">{task.task}</p>
      </div>
    );
  });

  return (
    <div>
      <h3>Todays tasks</h3>
      <div className="showTasks">{tasksMap}</div>
    </div>
  );
};

export default TasksDisplay;
