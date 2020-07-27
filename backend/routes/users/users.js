const users = require("express").Router();

const {
  getUserInfo,
  createUser,
  checkEmail,
  getAllPetsByUser,
  createPet,
} = require("../../queries/users/users");

const { checkToken } = require("../../middleware/auth");

users.get("/:id", checkToken, getUserInfo);
users.post("/", createUser);
users.post("/check", checkEmail);
users.get("/pets/:id", checkToken, getAllPetsByUser);
users.post("/pets/:id", checkToken, createPet)

module.exports = users;