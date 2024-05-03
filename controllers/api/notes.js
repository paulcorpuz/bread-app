const Note = require('../../models/note');

module.exports = {
  create,
  index,
  edit,
  delete: deleteNote,
};


// * C
async function create(req, res) {
  try {
    const newNote = {
      text: req.body.newNote,
      user: req.user._id
    };
    const note = await Note.create(newNote);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}


// * R
async function index(req, res) {
  try {
    const notes = await Note.find({}).sort({"updatedAt": -1})
    res.json(notes);
  } catch (err) {
    res.status(400).json(err);
  }
}


// * U
async function edit(req, res) {
  try {
    const note = await Note.findOneAndUpdate({ _id: req.params.id }, { text: req.body.editNote }, { new: true });
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}


// * D
async function deleteNote(req, res) {
  try {
    const note = await Note.findByIdAndDelete(req.params.id);
    res.json(note);
  } catch (err) {
    res.status(400).json(err);
  }
}




// ? Notes and References -----
// from Shopping Cart Lesson 1
// function findOneAndUpdate(filter, update, options) {}
// https://mongoosejs.com/docs/tutorials/findoneandupdate.html