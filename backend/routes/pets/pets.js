const pets = require("express").Router();

const { 
    createNewPet
} = require("../../queries/pets/pets");

const { checkToken } = require("../../middleware/auth");

pets.post("/", checkToken, createNewPet)

module.exports = pets