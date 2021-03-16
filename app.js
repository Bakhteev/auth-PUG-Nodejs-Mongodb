const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const multer = require('multer')
const path = require('path')
const { requireAuth, checkUser } = require('./middlewares/authMiddleware')
const authRouter = require('./routes/authRoutes')

const dbURL =
  'mongodb+srv://bakhteev:323694m@cluster0.ss8ji.mongodb.net/jwt?retryWrites=true&w=majority'

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(express.json())
app.use(cookieParser())

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((results) => app.listen(3001))
  .catch((err) => console.log(err))

const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + '-' + Date.now() + path.extname(file.originalname)
    )
  },
})

const upload = multer({
  storage
}).single('myPhoto')

app.get('*', checkUser)

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      res.render('error', { message: err })
    } else {
      console.log(req.file)
      res.send(req.file)
    }
  })
})

app.get('/', (req, res) => res.render('pages/index'))

app.get('/home', requireAuth, (req, res) => res.render('pages/home'))

app.get('/settings', (req, res) => res.render('pages/settings'))

app.use(authRouter)
