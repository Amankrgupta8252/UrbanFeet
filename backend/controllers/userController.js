// backend/controllers/userController.js
const User = require('../models/userModel');

const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

const createUser = async (req, res) => {
  const { name, email } = req.body;
  const user = new User({ name, email });
  const createdUser = await user.save();
  res.status(201).json(createdUser);
};

module.exports = { getUsers, createUser };
