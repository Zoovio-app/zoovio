const db = require("../../database/index");
const { error } = require("console");

const getAllTasksByPet = async (req, res, next) => {
  try {
    const { id } = req.params;
    let tasks = await db.any(
      `SELECT tasks.*, pets.* FROM tasks LEFT JOIN pets ON tasks.pet_id = pets.id`,
      [id]
    );
    res.status(200).json({
      status: "Success",
      message: "Selected All Tasks for Pet",
      payload: {
        pet: id,
        tasks,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Did not select all tasks for pet",
    });
    next(err);
  }
};

const createNewTask = async (req, res, next) => {
  const { pet_id, task, due_date } = req.body;
  console.log(due_date);
  try {
    let newTask = await db.none(
      `INSERT INTO tasks(pet_id, task, due_date) VALUES($1, $2, $3)`,
      [pet_id, task, due_date]
    );
    res.status(200).json({
      status: "Success",
      message: "Created new task",
      payload: {
        // pet: pet_id,
        newTask,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "Error",
      message: "Did not create new task",
    });
  }
};

const getAllTasksByUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    let tasks = await db.any(
      `SELECT tasks.*, pets.*, users.* FROM users
        RIGHT JOIN pets ON users.user_id = pets.owner
        LEFT JOIN tasks ON pets.id = tasks.pet_id`,
      [id]
    );
    res.status(200).json({
      status: "Success",
      message: "Selected All Tasks by User",
      payload: {
        tasks,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Did not select all tasks by user",
    });
    next(error);
  }
};

const getAllTasksByMonth = async (req, res, next) => {
  try {
    const { month } = req.params;
    const { user } = req.query;

    let tasks = await db.any(
      `SELECT tasks.*, pets.* FROM users
        RIGHT JOIN pets ON users.user_id = pets.owner
        LEFT JOIN tasks ON pets.id = tasks.pet_id WHERE EXTRACT(MONTH FROM due_date) = $1 and owner = $2`,
      [month, user]
    );
    res.status(200).json({
      status: "Success",
      message: "Selected All Tasks For this Month",
      tasks,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Did not select all tasks for this month",
    });
    console.log(error);
  }
};

const getAllTasksByDay = async (req, res, next) => {
  try {
    const { day } = req.params;
    const { user } = req.query;
    let tasksByDay = await db.any(
      `SELECT tasks.*, pets.* FROM users
        RIGHT JOIN pets ON users.user_id = pets.owner
        LEFT JOIN tasks ON pets.id = tasks.pet_id WHERE EXTRACT(DAY FROM due_date) = $1 AND owner = $2`,
      [day, user]
    );
    res.status(200).json({
      status: "Success",
      message: "Selected All Tasks For this Day",
      payload: {
        tasksByDay,
      },
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Did not select all tasks for this day",
    });
    console.log(error);
  }
};

module.exports = {
  getAllTasksByPet,
  createNewTask,
  getAllTasksByUser,
  getAllTasksByMonth,
  getAllTasksByDay,
};
