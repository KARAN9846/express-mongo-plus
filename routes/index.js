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


router.get('/create', async function (req, res) {

 let userdata = await userModel.create({
    username: "MR Wayne",
    nickname: "Batman",
    description: "Save Gotham, Build trust in people",
    categories: ['normal life', 'rachel', 'alfred', 'wayne manor', 'pit', 'bat', 'thomas wayne']

  });
  res.send(userdata)
});


router.get('/find', async function (req,res) {
  var regx = new RegExp("^Harsh$", "i")
  let user =  await userModel.find({username: regx})
  res.send(user);
})

module.exports = router;
