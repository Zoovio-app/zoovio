import React from "react";
import "./css/display.css";
import { ListGroup } from "react-bootstrap";

const TasksDisplay = ({ tasks = [] }) => {
  if (tasks.length === 0)
    return (
      <div>
        <h3>You haven't created a Task yet.</h3>
        <p>
          Select an option below or create your own by clicking the button
          above.
        </p>
      </div>
    );

  const tasksMap = tasks.map((task) => {
    return (
      <ListGroup key={task.task_id}>
        <ListGroup.Item variant="danger">
          <div className="allUsersTasks">
            <p className="petName">{task.pet_name}</p>
            <p className="taskContent">{task.task}</p>
            <p>{task.duetime}</p>
          </div>
        </ListGroup.Item>
      </ListGroup>
    );
  });

  return (
    <div>
      <h3>Todays tasks</h3>
      <div className="showTasks">
        <div className="tasksContainer">{tasksMap}</div>
      </div>
    </div>
  );
};

export default TasksDisplay;
