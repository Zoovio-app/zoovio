const pets = require("express").Router();
const { checkToken } = require("../../middleware/auth");

module.exports = pets;
