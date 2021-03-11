const formLogin = document.querySelector('form.login__form')

const passwordError = document.querySelector('.label__text.password')
const emailError = document.querySelector('.label__text.email')

formLogin.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = formLogin.email.value
  const password = formLogin.password.value
  try {
    const res = await fetch('/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    if (data.errors) {
      passwordError.innerHTML = data.errors.password
      emailError.innerHTML = data.errors.email
    }
    if (data.user) {
      location.assign('/home')
    }
  } catch (err) {
    console.log(err)
  }
})
