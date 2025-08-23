//cancel this file temporarily
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
  "mongodb+srv://alaaahmed25612:node.js1234@learn-mongodb.c5od5xo.mongodb.net/egyptian_league?retryWrites=true&w=majority&appName=learn-mongoDB"
);

    console.log("✅ Connected to MongoDB Atlas");
  } catch (err) {
    console.error("❌ Error connecting to MongoDB:", err.message);
    process.exit(1); // stop the server if connection fails
  }
};

module.exports = connectDB;
