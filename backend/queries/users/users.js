const db = require("../../database/index");
const { error } = require("console");

const getUserInfo = async (req, res, next) => {
  const { id } = req.params;

  try {
    let user = await db.any(`SELECT * FROM users WHERE user_id =$1`, [id]);
    if (user.length === 0) throw error;
    res.status(200).json({
      status: 200,
      message: "user retrieved",
      user,
    });
  } catch (error) {
    res.status(400).json({ status: 400, message: "user does not exist" });
  }
};

const createUser = async (req, res, next) => {
  const { id, email, name, phone } = req.body;

  try {
    await db.none(`INSERT INTO users VALUES($1,$2,$3,$4)`, [
      id,
      email,
      name,
      phone,
    ]);
    res.status(200).json({ status: 200, message: "user created" });
  } catch (error) {
    res.status(400).json({ status: 400, message: "error" });
  }
};

const checkEmail = async (req, res, next) => {
  const { email } = req.body;
  try {
    let user = await db.one(`SELECT * from users WHERE email =$1`, [email]);
    if (user.email) {
      throw error;
    }
  } catch (error) {
    next(error);
  }
};

const getAllPetsByUser = async (req, res, next) => {
  try {
      const { id } = req.params
      let pets = await db.any(`SELECT * FROM pets WHERE owner = $1`, [id]);
      res.status(200).json({
          status: "Success",
          message: "Selected all pets from user",
          payload: {
              user: id,
              pets
          }
      })
  } catch (error) {
      res.status(400).json({
          status: "Error",
          message: "Did not select all pets from user"
      })
      next(err)
  }
};

const createPet = async (req, res, next) => {
  const { id, owner, pet_name, pet_pic } = req.body;
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

module.exports = { getUserInfo, createUser, checkEmail, getAllPetsByUser, createPet };
