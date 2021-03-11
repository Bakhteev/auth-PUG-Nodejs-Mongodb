const h6 = document.querySelector('h6.lang__value')
const items = document.querySelectorAll('.lang__item')
const list = document.querySelector('.lang__list')

const dropdown = (item) => {
  list.classList.remove('active')
  const value = item.dataset.lang
  h6.innerText = value
  h6.classList.remove('active')
}
h6.addEventListener('click', () => {
  h6.classList.toggle('active')
  list.classList.toggle('active')
})
items.forEach((item) => {
  item.addEventListener('click', () => dropdown(item))
})
