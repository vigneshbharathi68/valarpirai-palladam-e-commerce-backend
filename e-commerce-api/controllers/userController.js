const User = require("../models/User");
const bcrypt = require("bcrypt");

// GET all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addUsers = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password_hash: hashedPassword,
      phone: req.body.phone,
      role: req.body.role,
    });
		console.log({user})
    res.status(201).json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
