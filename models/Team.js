const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: String,
  city: String,
  stadium: String,
  foundedYear: Number
});


module.exports = mongoose.model("Team", teamSchema, "teams");
