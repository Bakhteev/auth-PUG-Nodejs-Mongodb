const formSignUP = document.querySelector('form.signup__form')

formSignUP.addEventListener('submit', async (e) => {
  e.preventDefault()
  const email = formSignUP.email.value
  const username = formSignUP.username.value
  const password = formSignUP.password.value
  try {
    const res = await fetch('/signup', {
      method: 'POST',
      body: JSON.stringify({ email, username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    const data = await res.json()
    if (data.user) {
      location.assign('/home')
    }
  } catch (err) {
    console.log(err)
  }
})
