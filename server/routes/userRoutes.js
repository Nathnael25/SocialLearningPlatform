const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const User = require("../models/User");

const validateUserInput = (req, res, next) => {
  const { name, email, password } = req.body;
  if (!name || !email || password) {
    return res
      .status(400)
      .json({ erro: "Name, email, or password is not filled" });
  }
};
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (err) {
    console.error(err);
    res.status(5000).json({ error: "An error occurred while fetching users" });
  }
});
router.get("/filtering", async (req, res) => {
  try {
    const users = await User.find({}, "name email");
    res.status(200).json(users);
  } catch (err) {
    res.status(5000).json({ error: "error fetching the user" });
  }
});
router.get("/sorting", async (req, res) => {
  try {
    const sorting = await User.find().sort({ name: 1 });
    res.status(200).json(sorting);

    /*const results = await User.aggregate([
            { $group: { _id: "$email", count: { $sum: 1 } } }, // Group by email and count occurrences
            { $match: { count: { $gt: 1 } } }, // Only include duplicates
            { $sort: { count: -1 } } // Sort by count in descending order
        ]);
        
        console.log(results);*/
  } catch (err) {
    res.status(5000).json({ error: "Something went wrong with sorting" });
  }
});
router.post("/add", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({ name, email, password: hashedPassword });
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, updates, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (err) {
    console.error(err);
    res
      .status(500)
      .json({ error: "An error occurred while updating the user" });
  }
});

module.exports = router;
