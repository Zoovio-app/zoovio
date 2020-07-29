const db = require("../../database/index");

const createPet = async (req, res, next) => {
  const { id, owner, pet_name } = req.body;
  try {
    let newPet = await db.one(`INSERT INTO pets VALUES($1, $2, $3)`, [
      id,
      owner,
      pet_name,
    ]);
    res.status(200).json({
      status: "success",
      message: "pet created",
      payload: newPet,
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Did not create new pet",
    });
    next(error);
  }
};

module.exports = { createPet };
