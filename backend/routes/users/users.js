const users = require("express").Router();
const {
  getUserInfo,
  createUser,
  checkEmail,
} = require("../../queries/users/users");

users.get("/:id", getUserInfo);
users.post("/", createUser);
users.post("/check", checkEmail);
module.exports = users;
