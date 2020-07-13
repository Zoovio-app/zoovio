const admin = require("../firebase");

const checkToken = async (req, res, next) => {
  try {
    const token = req.headers.authtoken;
    const decodedToken = await admin.auth().verifyIdToken(token);
    const uid = decodedToken.uid;
    req.user_id = uid;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "no authenticated user" });
  }
};

module.exports = { checkToken };
