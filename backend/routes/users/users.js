const users = require("express").Router();
const { getUserInfo } = require("../../queries/users/users");

users.get("/:id", getUserInfo);

module.exports = users;
