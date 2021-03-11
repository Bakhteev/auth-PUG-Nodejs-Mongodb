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

