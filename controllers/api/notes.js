const Note = require('../../models/Note');

module.exports = {
  create,
};

async function create(req, res) {
  try {
    // Add the user to the db
    const note = await Note.create({
      text: req.body.text,
      user: req.user._id,
    });
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}