const jwt = require("jsonwebtoken");
const config = require("config");

module.exports = function (req, res, next) {
  //getting token
  const token = req.header("x-auth-token");

  if (!token) {
    return res.status(401).json({ msg: "Not authorized!" });
  }

  try {
    //decoded through verify
    const decoded = jwt.verify(token, config.get("jwtSecret"));
    //set request
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Not valid token!" });
  }
};
