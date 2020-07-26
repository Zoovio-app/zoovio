// import React, { useState, useEffect, useContext } from "react";
// import { apiUrl } from "../../util/apiUrl";
// import { AuthContext } from "../../providers/AuthContext";
// import axios from "axios";

// const Tasks = () => {
//   const [taskList, setTaskList] = useState([]);
//   const [allUsersTasks, setAllUsersTasks] = useState([]);
//   const { token, currentUser } = useContext(AuthContext);
//   const API = apiUrl();

//   const fetchTasks = async () => {
//     try {
//       let res = await axios({
//         method: "get",
//         url: `${API}/api/users/tasks/pet/1`,
//       });
//       setTaskList([res.data.payload.tasks]);
//     } catch (error) {
//       setTaskList([]);
//     }
//   };

//   const fetchAllUsersTasks = async () => {
//     try {
//       let res = await axios({
//         method: "get",
//         url: `${API}/api/users/tasks/${currentUser.id}`,
//         headers: {
//           AuthToken: token,
//         },
//       });
//       // debugger;
//       setAllUsersTasks(res.data.payload.tasks);
//     } catch (error) {
//       setAllUsersTasks([]);
//     }
//   };

//   useEffect(() => {
//     fetchTasks();
//     fetchAllUsersTasks();
//   }, []);

//   // const tasksFeed = taskList.map((currentTask, i) => {
//   //   return (
//   //     <div className="taskFeed">
//   //       <p>{currentTask[i].pet_name}</p>
//   //       <p>{currentTask[i].task}</p>
//   //       <p>{currentTask[i].due_date}</p>
//   //     </div>
//   //   );
//   // });

//   const allTasks = allUsersTasks.map((userTask) => {
//     return (
//       <div className="allUsersTasks">
//         <p>{userTask.pet_name}</p>
//         <p>{userTask.task}</p>
//         <p>{userTask.due_date}</p>
//       </div>
//     );
//   });

//   return (
//     <div>
//       <div className="showTasks">
//         {/* {tasksFeed} */}

//         {allTasks}
//       </div>
//     </div>
//   );
// };

// export default Tasks;
