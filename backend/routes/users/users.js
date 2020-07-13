const users = require("express").Router();
const {
  getUserInfo,
  createUser,
  checkEmail,
} = require("../../queries/users/users");

const { checkToken } = require("../../middleware/auth");

users.get("/:id", checkToken, getUserInfo);
users.post("/", createUser);
users.post("/check", checkEmail);
module.exports = users;
