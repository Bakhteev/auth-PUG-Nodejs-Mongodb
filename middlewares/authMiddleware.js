const jwt = require('jsonwebtoken')
const User = require('../models/User')

const requireAuth = (req, res, next) => {
  const token = req.cookies.user
  if (token) {
    jwt.verify(token, 'секретный ключ', (err, decodedToken) => {
      if (err) {
        console.log(err.message)
        res.redirect('/login')
      } else {
        console.log(decodedToken)
        next()
      }
    })
  } else {
    res.redirect('/login')
  }
}

const checkUser = (req, res, next) => {
  const token = req.cookies.user
  if (token) {
    jwt.verify(token, 'секретный ключ', async (err, decodedToken) => {
      if (err) {
        console.log(err)
        res.locals.user = null
        next()
      } else {
        const user = await User.findById(decodedToken.id)
        res.locals.user = user
        console.log(decodedToken)
        next()
      }
    })
  } else {
    res.locals.user = null
    next()
  }
}

module.exports = { requireAuth, checkUser }
