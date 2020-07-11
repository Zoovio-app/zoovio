const users = require("express").Router();
const { getUserInfo, createUser } = require("../../queries/users/users");

users.get("/:id", getUserInfo);
users.post("/", createUser);

module.exports = users;
