import React from "react";

const TasksDisplay = ({ tasks = [] }) => {
  if (tasks.length === 0)
    return (
      <div>
        <h1>NO TASKS FOR THIS DATE</h1>
      </div>
    );

  return tasks.map((task) => {
    return (
      <div key={task.id}>
        <h2>{task.pet_name}</h2>
        <h3>{task.task}</h3>
      </div>
    );
  });
};

export default TasksDisplay;
