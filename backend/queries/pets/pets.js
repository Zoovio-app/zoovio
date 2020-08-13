const db = require("../../database/index");

const createPet = async (req, res, next) => {
  const { owner, pet_name, img, dob } = req.body;
  try {
    await db.none(
      `INSERT INTO pets(owner,pet_name,img, dob) VALUES($1, $2, $3, $4)`,
      [owner, pet_name, img, dob]
    );
    res.status(200).json({
      status: "success",
      message: "pet created",
    });
  } catch (error) {
    res.status(400).json({
      status: "Error",
      message: "Did not create new pet",
    });
    console.log(error);
  }
};

module.exports = { createPet };
