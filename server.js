console.log("👉 Server file started...");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose"); 

const teamRoutes = require("./routes/teamRoutes");
const matchRoutes = require("./routes/matchRoutes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
const connectToDb = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://alaaahmed25612:node.js1234@learn-mongdb.c5od5xo.mongodb.net/egyptian_league?retryWrites=true&w=majority&appName=learn-mongoDB"
    );
    console.log("Database connected");
  } catch (error) {
    console.log("Error connecting to database:", error);
  }
};


connectToDb().then(() => {
  // Routes
  app.use("/teams", teamRoutes);
  app.use("/matches", matchRoutes);

  // Run server
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(` Server running on port ${PORT}`);
  });
});
