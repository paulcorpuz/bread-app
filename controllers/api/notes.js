const Note = require('../../models/Note');

module.exports = {
  // index,
  create,
};


// async function index(req, res){
//   try {





//     res.json(note);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }




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