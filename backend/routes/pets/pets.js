const pets = require("express").Router();
const { checkToken } = require("../../middleware/auth");
const { createPet } = require("../../queries/pets/pets");

pets.post("/", createPet);

module.exports = pets;
