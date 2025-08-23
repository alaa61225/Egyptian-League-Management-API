const Match = require("../models/Match");

exports.getMatches = async (req, res) => {
  const matches = await Match.find().populate("homeTeam awayTeam");
  res.json(matches);
};

exports.createMatch = async (req, res) => {
  const match = new Match(req.body);
  await match.save();
  res.json(match);
};

exports.updateMatch = async (req, res) => {
  const match = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(match);
};

exports.deleteMatch = async (req, res) => {
  await Match.findByIdAndDelete(req.params.id);
  res.json({ message: "Match deleted" });
};
