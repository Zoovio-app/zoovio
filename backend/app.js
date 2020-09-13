const express = require("express");
const http = require("http");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./routes/users/users");
const tasksRouter = require("./routes/tasks/tasks");
const petsRouter = require("./routes/pets/pets");
require("dotenv").config();
const port = process.env.PORT;
const app = express();

const server = http.createServer(app);
let test = "test";
let test2 = "test2";
app.use(
  cors({
    credentials: true,
    origin: "https://zoovio.netlify.app",
  })
);
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

const users = {};

io.on("connection", (socket) => {
  socket.emit("yourID", socket.id);
  socket.on("currentUser", (user) => {
    if (!users[socket.id]) {
      users[socket.id] = { name: user.name, socketId: socket.id };
    }
  });
  io.sockets.emit("allUsers", users);
  socket.on("disconnect", () => {
    delete users[socket.id];
  });

  socket.on("callUser", (data) => {
    io.to(data.userToCall).emit("hey", {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on("acceptCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });

  socket.on("declineCall", (data) => {
    io.to(data.to).emit("callDeclined", data.name);
  });

  socket.on("endCall", (data) => {
    socket.disconnect(true);
  });
});

app.use(errorHandling);

server.listen(port, () => {
  console.log(`LISTENING TO PORT ${port}`);
});
