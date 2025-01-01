const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://nathnaelsolomon32:dvURzj60TX4wRZWn@sociallearningplatform.twhwx.mongodb.net/?retryWrites=true&w=majority&appName=SocialLearningPlatform",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("MongoDB connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
