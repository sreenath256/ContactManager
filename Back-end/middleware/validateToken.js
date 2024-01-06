const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.authorization;
  //   console.log(req.headers.authorization);
  token = authHeader.split(" ")[1];
  if (authHeader && authHeader.startsWith("Bearer")) {
    jwt.verify(token, process.env.ACCESS_SECRET_TOKEN, (err, decoded) => {
      if (err) {
        res.status(401);
        throw new Error("User is not authorized");
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } else {
    res.status(401);
    throw new Error("User is not authorized");
  }
});

module.exports = validateToken;
