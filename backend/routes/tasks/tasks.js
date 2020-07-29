const { checkToken } = require("../../middleware/auth");

const tasks = require("express").Router();
const {
  getAllTasksByPet,
  createNewTask,
  getAllTasksByUser,
  getAllTasksByMonth,
  getAllTasksByDay,
} = require("../../queries/tasks/tasks");

tasks.get("/pet/:id", getAllTasksByPet);
tasks.post("/", checkToken, createNewTask);
tasks.get("/:id", getAllTasksByUser);
tasks.get("/month/:month", checkToken, getAllTasksByMonth);
tasks.get("/day/:day", checkToken, getAllTasksByDay);

module.exports = tasks;
