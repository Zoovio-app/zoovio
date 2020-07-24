const db = require("../../database/index");
const { error } = require("console");

const getAllTasksByPet = async (req, res, next) => {
    try {
        const { id } = req.params
        let tasks = await db.any(`SELECT tasks.*, pets.* FROM tasks LEFT JOIN pets ON tasks.pet_id = pets.id`, [id])
        res.status(200).json({
            status: "Success",
            message: "Selected All Tasks for Pet",
            payload: {
                pet: id,
                tasks
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Did not select all tasks for pet"
        })
        next(err)
    }
}

const createNewTask = async (req, res, next) => {
    const { pet_id, task, due_date } = req.body;
    console.log(due_date);
    try {
        let newTask = await db.none(`INSERT INTO tasks(pet_id, task, due_date) VALUES($1, $2, $3)`, [pet_id, task, due_date])
        res.status(200).json({
            status: "Success",
            message: "Created new task",
            payload: {
                // pet: pet_id,
                newTask
            }
        })
    } catch(err) {
        console.log(err);
        res.status(400).json({
            status: "Error",
            message: "Did not create new task"
        })
    }
}

const getAllTasksByUser = async (req, res, next) => {
    try {
        const { id } = req.params
        let tasks = await db.any(`SELECT tasks.*, pets.*, users.* FROM users
        RIGHT JOIN pets ON users.user_id = pets.owner
        LEFT JOIN tasks ON pets.id = tasks.pet_id`, [id])
        res.status(200).json({
            status: "Success",
            message: "Selected All Tasks by User",
            payload: {
                tasks
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Did not select all tasks by user"
        })
        next(err)
    }
}

const getAllTasksByMonth = async (req, res, next) => {
    try {
        const { month } = req.body
        let tasksThisMonth = await db.any(`SELECT tasks.*, pets.*, users.* FROM users
        RIGHT JOIN pets ON users.user_id = pets.owner
        LEFT JOIN tasks ON pets.id = tasks.pet_id WHERE EXTRACT(MONTH FROM due_date) = $1`, [month])
        res.status(200).json({
            status: "Success",
            message: "Selected All Tasks For this Month",
            payload: {
                tasksThisMonth
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Did not select all tasks for this month"
        })
        next(err)
    }
}

const getAllTasksByDay = async (req, res, next) => {
    try {
        const { day } = req.body
        let tasksByDay = await db.any(`SELECT tasks.*, pets.*, users.* FROM users
        RIGHT JOIN pets ON users.user_id = pets.owner
        LEFT JOIN tasks ON pets.id = tasks.pet_id WHERE EXTRACT(DAY FROM due_date) = $1`, [day])
        res.status(200).json({
            status: "Success",
            message: "Selected All Tasks For this Day",
            payload: {
                tasksByDay
            }
        })
    } catch (error) {
        res.status(400).json({
            status: "Error",
            message: "Did not select all tasks for this day"
        })
        next(err)
    }
}

module.exports = { getAllTasksByPet, createNewTask, getAllTasksByUser, getAllTasksByMonth, getAllTasksByDay };