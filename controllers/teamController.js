const Team = require("../models/Team");

// GET with Pagination
exports.getTeams = async (req, res) => {
  try {
    let { page = 1, limit = 10 } = req.query;
    page = parseInt(page);
    limit = parseInt(limit);

    const teams = await Team.find()
      .skip((page - 1) * limit)
      .limit(limit);

    const total = await Team.countDocuments();

    res.json({
      total,
      page,
      pages: Math.ceil(total / limit),
      data: teams
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// CREATE
exports.createTeam = async (req, res) => {
  try {
    const team = new Team(req.body);
    await team.save();
    res.json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// UPDATE
exports.updateTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!team) return res.status(404).json({ message: "Team not found" });
    res.json(team);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE
exports.deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found" });
    res.json({ message: "Team deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.uploadLogo = async (req, res) => {
  try {
    const team = await Team.findById(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found" });

    team.logo = req.file ? `/uploads/${req.file.filename}` : null;
    await team.save();

    res.json({ message: "Logo uploaded successfully", team });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
