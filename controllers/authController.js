const User = require('../models/User')

const Login_get = (req, res) => {
  res.render('pages/login')
}

const SignUP_get = (req, res) => {
  res.render('pages/signup')
}

const Login_post = (req, res) => {
  const { username, password } = req.body
  try {
    console.log(username, password)
    res.render('pages/login')
  } catch (e) {
    console.log(e)
  }
}

const SignUP_post = async (req, res) => {
  const { username, password } = req.body
  try {
    const user = await User.create({ username, password })
    res.status(201).json(user)
    res.render('pages/login')
  } catch (e) {
    console.log(e)
  }
}

module.exports = { Login_get, SignUP_get, Login_post, SignUP_post }
