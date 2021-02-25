const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRoutes.js')

const dbURL =
  'mongodb+srv://bakhteev:323694m@cluster0.ss8ji.mongodb.net/auth-project?retryWrites=true&w=majority'

const app = express()

app.set('view engine', 'pug')

app.use(express.static('public'))
app.use(express.json())

mongoose
  .connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((results) => app.listen(3001))
  .catch((err) => console.log(err))

app.get('/', (req, res) => res.render('pages/index'))

app.use(authRouter)
