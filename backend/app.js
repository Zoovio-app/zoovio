const express = require("express");
// for socket io
const http = require("http");
// ---------------------------------------
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./routes/users/users");
const tasksRouter = require("./routes/tasks/tasks");
const petsRouter = require("./routes/pets/pets");
require("dotenv").config();
const port = process.env.PORT;
const app = express();
// -------------------------------------
// socket io
const server = http.createServer(app);
// app.use(cors());
app.use(cors({credentials: true, origin: "http://localhost:3002"}));
const socket = require("socket.io");
const io = socket(server);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
app.use("/api/users/tasks", tasksRouter);
app.use("/api/users/pets", petsRouter);

const errorHandling = (error, req, res, next) => {
  if (error.received === 0) {
    res
      .status(200)
      .json({ status: 200, message: "user does not exist", user: false });
  } else {
    res
      .status(400)
      .json({ status: 400, message: "user already exists", user: true });
  }
};

app.use(errorHandling);

app.listen(port, () => {
  console.log(`LISTENING TO PORT ${port}`);
});
