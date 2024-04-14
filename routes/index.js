var express = require('express');
var router = express.Router();
const userModel = require('./users')


// Flash messages

// router.get('/', function(req, res) {
//   res.render('index');
// });

// router.get('/failed', function (req,res) {
//   req.flash("age", 12)
//   res.send("made it")
// })

// router.get('/check', function (req,res) {
//   console.log(req.flash("age"))
//   res.send("check on terminal")
// })




// Intermidiate MongoDB


// router.get('/create', async function (req, res) {

//  let userdata = await userModel.create({
//     username: "MR Wayne",
//     nickname: "Batman",
//     description: "Save Gotham, Build trust in people",
//     categories: ['normal life', 'rachel', 'alfred', 'wayne manor', 'pit', 'bat', 'thomas wayne']

//   });
//   res.send(userdata)
// });


// find data on basis of case insensative 

// router.get('/find', async function (req,res) {
//   var regx = new RegExp("^HaRsh$", "i")
//   let user =  await userModel.find({username: regx})
//   res.send(user);
// })



// find data on basis of simillar values

// router.get('/find', async function (req,res) {
//   let user =  await userModel.find({categories : {$all: ['react', 'express',]}})
//   res.send(user);
// })



// find data on basis of date range

// router.get('/find', async function (req,res) {

//   var date1 = new Date('2024-4-14');
//   var date2 = new Date('2024-4-15');

//   let user =  await userModel.find({ datecreated : { $gte: date1, $lte: date2}})
//   res.send(user);
// }) 




// find data on based of field

router.get('/find', async function (req,res) {


  let user =  await userModel.find({ categories : { $exists:true }})
  res.send(user);
}) 

module.exports = router;


