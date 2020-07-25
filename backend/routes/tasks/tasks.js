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
tasks.post("/", createNewTask);
tasks.get("/:id", getAllTasksByUser);
tasks.get("/month/:month", getAllTasksByMonth);
tasks.get("/:day", getAllTasksByDay);

module.exports = tasks;
