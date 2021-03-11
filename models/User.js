const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'user is not defined'],
    unique: true,
  },
  email: {
    type: String,
    required: [true, 'email is not defined'],
    unique: true,
    lowercase: true,
    validate: [isEmail, 'Пожалуйста, введите валидную почту'],
  },
  password: {
    type: String,
    required: [true, 'password is not defined'],
    minLength: [
      6,
      'длина пароля меньше 6, пожалуйста, введите валидный пароль',
    ],
  },
})

// Запусти эту функцию ПЕРЕД тем как создать нового пользователя
userSchema.pre('save', async function (next) {
  const salt = await bcrypt.genSalt()
  this.password = await bcrypt.hash(this.password, salt)
  next()
})

// // Запусти эту функцию ПОСЛЕ сохранения нового пользователя в MongoDB
// userSchema.post('save', (user, next) => {
//   console.log('Новый пользователь был создан:', user);
//   next();
// });

const User = mongoose.model('user', userSchema)

module.exports = User
