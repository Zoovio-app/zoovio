import React from "react";
import { ListGroup } from "react-bootstrap";
import "./css/display.css";
import meds from "../../images/meds2.png";
import food from "../../images/pet-food2.png";
import groom from "../../images/saloon2.png";
import taskPic from "../../images/taskpic2.png";
import { strFormat } from "./helper/helper";
import { useDispatch } from "react-redux";
import { setTask } from "../taskForm/taskFormSlice";
import { useHistory } from "react-router-dom";

const TasksDisplay = ({ tasks = [] }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const onClick = (task) => {
    dispatch(setTask(task));
    history.push(`/tasks/create${history.location.pathname}`);
  };
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
          <div
            onClick={() => onClick("Administer medication")}
            className="examples"
          >
            <div className="exampleImgHolder">
              <img alt="" src={meds} />
            </div>
            <div className="exampleP">
              <p>Give your pet medication</p>
            </div>
          </div>
          <div
            onClick={() => onClick("Buy food/supplies")}
            className="examples"
          >
            <div className="exampleImgHolder">
              <img alt="" src={food} />
            </div>
            <div className="exampleP">
              <p>Buy food/supplies</p>
            </div>
          </div>
          <div
            onClick={() => onClick("Take to the groomer")}
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
        <ListGroup.Item id="listG">
          <div className="allUsersTasks">
            <div className="taskIcon">
              <img src={taskPic} alt="" />
            </div>
            <div className="taskInfo">
              <div>
                <p className="petName">{task.pet_name}</p>
              </div>
              <div>
                <p className="taskContent">{task.task}</p>
              </div>
              <div>
                <p>{strFormat(task.duetime)}</p>
              </div>
            </div>
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
