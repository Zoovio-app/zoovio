const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const usersRouter = require("./routes/users/users");
require("dotenv").config();
const port = process.env.PORT;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/users", usersRouter);

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
