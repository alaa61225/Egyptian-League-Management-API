const mongoose = require("mongoose");

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Team name is required"],
    minlength: [3, "Team name must be at least 3 characters"],
    maxlength: [50, "Team name must not exceed 50 characters"]
  },
  city: {
    type: String,
    required: [true, "City is required"]
  },
  stadium: {
    type: String,
    required: [true, "Stadium name is required"]
  },
  foundedYear: {
    type: Number,
    min: [1800, "Year must be after 1800"],
    max: [new Date().getFullYear(), "Year cannot be in the future"]
  },
  logo: {
  type: String,
  default: null
}

});

module.exports = mongoose.model("Team", teamSchema, "teams");
