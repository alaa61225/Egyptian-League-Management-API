const mongoose = require("mongoose");

const matchSchema = new mongoose.Schema({
  homeTeam: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  awayTeam: { type: mongoose.Schema.Types.ObjectId, ref: "Team" },
  matchDate: Date,
  score: String
});


module.exports = mongoose.model("Match", matchSchema, "matches");
