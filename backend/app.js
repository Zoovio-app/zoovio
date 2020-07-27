const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
const socketio = require('socket.io');
const cors = require('cors');
// const http = require('http');


const { addUser, removeUser, getUser, getUsersInMessage } = require('./middleware/users')

const usersRouter = require("./routes/users/users");
const messagesRouter = require("./routes/messages/messages");
const tasksRouter = require("./routes/tasks/tasks");
const petsRouter = require("./routes/pets/pets");

require("dotenv").config();
const port = process.env.PORT;
const server = app.listen(port, () => {
  console.log(`LISTENING TO PORT ${port}`);
});

const io = socketio(server);
// const io = require('socket.io')(http);



app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);
// app.get("/api/users", (req, res, next) => {
//     res.json("working")
//   })


// const whitelist = ['http://localhost:3003'];
// const corsOptions = {
//   credentials: true, // This is important.
//   origin: (origin, callback) => {
//     if(whitelist.includes(origin))
//       return callback(null, true)

//       callback(new Error('Not allowed by CORS'));
//   }
// }



// app.use(cors(corsOptions));


// app.use("/", (req, res) => res.sendFile(__dirname + "/index.html"));


// http.listen(3003, () => console.log("listening on http://localhost:3003"));
  
io.on('connection', (socket) => {
  console.log('User has entered');

  socket.join('some room');
  
  // socket.on('join', ({ name, room }, callback) => {
  //   const { error, user } = addUser({ id: socket.id, name, room});
  //   console.log(name)
  //   console.log(room)
  //   if(error) {
  //     return callback(error)
  //   }

  //   socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room ${user.room}.`});
  //   socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name} has joined!` });

  //   io.to(user.room).emit('roomData', { room: user.room, users: getUsersInMessage(user.room) });
  //   // socket.join(user.room);
  //   callback();
  // });


    socket.on('sendMessage', (message, callback) => {
    const user = getUser(socket.id);
    io.to(user.room).emit('message', { user: user.name, text: message });
    callback();
  });
  
  socket.on('disconnect', () => {
    const user = removeUser(socket.id);

    if(user) {
      io.to(user.room).emit('message', { user: 'Admin', text: `${user.name} has left.` });
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInMessage(user.room)});
    }
  })
  
});

app.use(messagesRouter)


app.use("/api/users/tasks", tasksRouter);
app.use("api/pets", petsRouter);

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



