const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const validateToken = require("../middleware/validateToken");

const registerUser = asyncHandler(async (req, res) => {
  console.log("This is recived from register request", req.body);
  const { username, email, password } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fileds are mantatory");
  }

  //check for user already registers or not
  const avalableUser = await User.findOne({ email });
  if (avalableUser) {
    res.status(400);
    throw new Error("Email already been registered");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashedPassword,
  });

  console.log(`User created success ${user}`);

  if (user) {
    res.status(201).json({
      id: user.id,
      username: user.id,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
});

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400);
    throw new Error("All fileds are mantatory");
  }
  const user = await User.findOne({ email });
  if (!user) {
    res.status(401);
    throw new Error("No user found");
  }
  if (user &&  await bcrypt.compare(password, user.password)) {
    const token = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user.id,
        },
      },
      process.env.ACCESS_SECRET_TOKEN,
      
    );
    res.json({ token });
  } else {
    res.status(401);
    throw new Error("Password is incorrect");
  }
});

const currentUser = asyncHandler(async (req, res) => {
  validateToken;
  res.json(req.user);
});

module.exports = { registerUser, loginUser, currentUser };
