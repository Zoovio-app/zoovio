const messages = require("express").Router();

messages.get("/", (req, res) => {
  res.send({ response: "Server is up and running." }).status(200);
});

module.exports = messages;