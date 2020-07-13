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

module.exports = { getUserInfo, createUser, checkEmail };
