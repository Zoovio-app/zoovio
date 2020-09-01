import React from "react";
import "./css/display.css";
import { ListGroup } from "react-bootstrap";
import meds from "../../images/meds2.png";
import food from "../../images/pet-food2.png";
import groom from "../../images/saloon2.png";

const TasksDisplay = ({ tasks = [] }) => {
  if (tasks.length === 0)
    return (
      <div>
        <div>
          <h3>You haven't created a Task yet.</h3>
          <p style={{ color: "#91a8ca", fontWeight: "500" }}>
            Select an option below or create your own by clicking the button
            above.
          </p>
        </div>
        <div className="examplesCont">
          <div className="examples">
            <div className="exampleImgHolder">
              <img alt="" src={meds} />
            </div>
            <div className="exampleP">
              <p>Give your pet medication</p>
            </div>
          </div>
          <div className="examples">
            <div className="exampleImgHolder">
              <img alt="" src={food} />
            </div>
            <div className="exampleP">
              <p>Buy food/supplies</p>
            </div>
          </div>
          <div
            style={{ borderBottomColor: "transparent" }}
            className="examples"
          >
            <div className="exampleImgHolder">
              <img alt="" src={groom} />
            </div>
            <div className="exampleP">
              <p>Take your pet to the groomer</p>
            </div>
          </div>
        </div>
      </div>
    );

  const tasksMap = tasks.map((task) => {
    return (
      <ListGroup style={{ marginBottom: "1vh" }} key={task.task_id}>
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
