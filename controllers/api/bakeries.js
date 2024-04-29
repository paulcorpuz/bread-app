// const Bakery = require('../../models/bakery');
// // const token = process.env.GOOGLE_PLACES_KEY;


// module.exports = {
//   create,
//   index,
//   edit,
//   // delete: deleteBakery,
// };


// // * C
// async function create(req, res) {
//   try {
//     const newBakery = {
//       text: req.body.newBakery,
//       user: req.user._id
//     };
//     const bakery = await Bakery.create(newBakery);
//     res.json(bakery);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// // * R
// async function index(req, res) {
//   try {
//     const bakeries = await Bakery.find({});
//     res.json(bakeries);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// // * U
// async function edit(req, res) {
//   try {
//     const bakery = await Bakery.findOneAndUpdate({ _id: req.params.id }, { text: req.body.editBakery }, { new: true });
//     res.json(bakery);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// }

// // * D
// // async function deleteBakery(req, res) {
// //   try {
// //     // const note = await Note.findOneAndDelete({_id: req.params.id});
// //     const note = await Note.findByIdAndDelete(req.params.id);
// //     res.json(note);
// //   } catch (err) {
// //     res.status(400).json(err);
// //   }
// // }


// // from Shopping Cart Lesson 1
// // function findOneAndUpdate(filter, update, options) {}
// // https://mongoosejs.com/docs/tutorials/findoneandupdate.html
