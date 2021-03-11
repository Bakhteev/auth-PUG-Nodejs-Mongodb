const labels = document.querySelectorAll('.label')
const inputs = document.querySelectorAll('.label__input')

const handleChange = (e) => {
  if (e.target.value !== '') {
    e.target.classList.add('active')
    labels.forEach((label) => {
      if (e.target.id === label.getAttribute('for')) {
        label.classList.add('active')
      }
    })
  } else {
    e.target.classList.remove('active')
    labels.forEach((label) => {
      if (e.target.id === label.getAttribute('for')) {
        label.classList.remove('active')
      }
    })
  }
}
inputs.forEach((input) => {
  input.addEventListener('input', handleChange)
})
inputs.forEach((input) => {
  input.addEventListener('change', handleChange)
})

// const form = document.querySelector('form.signup__form')

// form.addEventListener('submit', async (e) => {
//   e.preventDefault()
//   const email = form.email.value
//   const username = form.username.value
//   const password = form.password.value

//   console.log(password, username, email)

//   try {
//     const res = await fetch('/signup', {
//       method: 'POST',
//       body: JSON.stringify({ email, username, password }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//     const data = await res.json()
//     console.log({user});
//   } catch (err) { console.log(err)}
// })

const form = document.querySelector('form.signup__form')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = form.email.value
  const username = form.username.value
  const password = form.password.value

  console.log(password, username, email)

  try {
    const res = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    console.log({ user })
  } catch (err) {
    console.log(err)
  }
})

const form2 = document.querySelector('.login__form')

const passwordError = document.querySelector('.login__text.password')
const emailError = document.querySelector('.login__text.email')

form2.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = form2.email.value
  const password = form2.password.value

  try {
    const res = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })

    const data = await res.json()

    console.log(data)

    if (data.errors) {
      passwordError.innerHTML = data.errors.password
      emailError.innerHTML = data.errors.email
    }
    if (data.user) {
      location.assign('/home');
    }
  } catch (err) {
    console.log(err)
  }
})