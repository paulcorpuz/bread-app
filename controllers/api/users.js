const User = require('../../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

module.exports = {
  create,
  login,
  checkToken,
  edit,
};


async function create(req, res) {
  try {
    // Add the user to the db
    const user = await User.create(req.body);
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/throw
// https://www.npmjs.com/package/bcrypt#with-promises
async function login(req, res) {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) throw new Error();
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) throw new Error();
    // there is a user, there is a match - create the token
    const token = createJWT(user);
    res.json(token);
  } catch (err) {
    res.status(400).json(err);
  }
}

function checkToken(req, res) {
  // req.user will always be there for you when a token is sent
  console.log('req.user', req.user);
  res.json(req.exp);
}


/*--- Helper Functions --*/
function createJWT(user) {
  return jwt.sign(
    // data payload
    { user },
    process.env.SECRET,
    { expiresIn: '24h' }
  );
}




// * C
// * R

// * U
// async function edit(req, res) {
//   try {
//     const user = await User.findById( req.params.id );
//     const {name, email, bio, profilePic } = req.body;
//     user.name = name
//     user.email= email
//     user.bio = bio
//     user.profilePic = profilePic
//     // Save NOT create
//     await user.save();
//     res.json(user);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }


async function edit(req, res) {
  try {
    const { name, email, bio, profilePic } = req.body;
    const updatedFields = {};
    if (name) updatedFields.name = name;
    if (email) updatedFields.email = email;
    if (bio) updatedFields.bio = bio;
    if (profilePic) updatedFields.profilePic = profilePic;

    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      updatedFields,
      { new: true }
    );

    res.json(updatedUser);
  } catch (err) {
    res.status(400).json(err);
  }
}










// * D

// https://medium.com/@findingalberta/what-the-fffff-findbyidandupdate-mongoose-107219d5f90
// It really is that simple. Call .findByIdAndUpdate( id, req.body, {new: true}, (err, data) => {…}) and you’re aces!