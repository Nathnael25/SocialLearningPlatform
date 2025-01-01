const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "This field is required to filled"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "This fiels required to be filled"],
    unique: true,
    lowercase: true,
    match: [/\S+@\S+\.\S+/, "Invalid email address"],
  },
  password: {
    type: String,
    required: [true, "Thid field has to be filled"],
    minlength: [6, "Password must be at least 6 characters"],
    select: false,
  },
  role: {
    type: String,
    enum: ["learner", "instructor", "admin"],
    default: "learner",
  },
  enrolledCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course", // References Course schema
    },
  ],
  profilePicture: {
    type: String,
    default: "default-profile.png", // Placeholder for user profile picture
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
