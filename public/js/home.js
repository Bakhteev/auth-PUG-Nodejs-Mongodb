const title = document.querySelector('.home__title')
const popUp = document.querySelector('.home__list')

title.addEventListener('click', ()=>{
  popUp.classList.toggle('active')
})