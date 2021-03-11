const jwt = require('jsonwebtoken')

const requireAuth = (req, res, next) => {
  const token = req.cookie('user')

  console.log(token)

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

module.exports = { requireAuth }
