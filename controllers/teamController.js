const Team = require("../models/Team");

exports.getTeams = async (req, res) => {
  const teams = await Team.find();
  res.json(teams);
};

exports.createTeam = async (req, res) => {
  const team = new Team(req.body);
  await team.save();
  res.json(team);
};

exports.updateTeam = async (req, res) => {
  const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(team);
};

exports.deleteTeam = async (req, res) => {
  await Team.findByIdAndDelete(req.params.id);
  res.json({ message: "Team deleted" });
};
