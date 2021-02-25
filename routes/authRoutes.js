const { Router } = require('express')
const authController = require('../controllers/authController')

// console.log(authController)

const { Login_get, SignUP_get, Login_post, SignUP_post } = authController

const router = Router()

router.get('/login', Login_get)

router.post('/login', Login_post)

router.get('/signup', SignUP_get)

router.post('/signup', SignUP_post)

module.exports = router
