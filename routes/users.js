var express = require('express');
var router = express.Router();

const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/EndGame2")

const userSchema = mongoose.Schema({
  username: String,
  nickname: String,
  description: String,
  categories: {
    type: Array,
    default: []
  },

  datecreated: {
    type: Date,
    default: Date.now()
  }

})

module.exports = mongoose.model("user", userSchema)
