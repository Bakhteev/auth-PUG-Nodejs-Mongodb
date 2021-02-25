const mongoose = require('mongoose')
const {isEmail}  = require('validator')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate:[isEmail , 'errror fuck']
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
})

const User = mongoose.model('user', userSchema)

module.exports = User
