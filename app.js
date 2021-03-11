const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRoutes')
const { requireAuth } = require('./middlewares/authMiddleware')
const cookieParser = require('cookie-parser')

const dbURL =
  'mongodb+srv://bakhteev:323694m@cluster0.ss8ji.mongodb.net/jwt?retryWrites=true&w=majority'

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(express.json())

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((results) => app.listen(3001))
  .catch((err) => console.log(err))

app.get('/', (req, res) => res.render('pages/index'))

// app.get('/moods', (req, res) => res.render('pages/moods'))

app.get('/home', requireAuth, (req, res) => res.render('pages/home'))

app.use(authRouter)
