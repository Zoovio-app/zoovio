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

module.exports = { getUserInfo };
