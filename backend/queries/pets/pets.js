const db = require("../../database/index");
const { error } = require("console");

const createNewPet = async (req, res, next) => {
    const { id, owner, pet_name, pet_pic} = req.body;
    try {
      let newPet = await db.one(`INSERT INTO pets VALUES($1, $2, $3, $4)`, [
        id, 
        owner, 
        pet_name,
        pet_pic
      ])
      res.status(200).json({ 
        status: "success", 
        message: "pet created",
        payload: newPet 
      });
    } catch(error) {
      res.status(400).json({
        status: "Error",
        message: "Did not create new pet"
      })
      next(error)
    }
  }

  module.exports = { createNewPet}