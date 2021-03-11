const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./routes/authRoutes.js')

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

app.get('/home', (req, res) => {
  res.render('pages/home')
})

app.get('/set-cookies', (req, res) => {
  // res.setHeader('Set-Cookie', 'newUser=true');

  res.cookie('newUser', false, { maxAge: 3000 })
  // res.cookie('bojo', 'maks', { maxAge: 3000 })
  // res.cookie('Username', sad, { maxAge: 5000 * 5000, secure: true });

  res.send('Вы получили куки!')
})

app.use(authRouter)
