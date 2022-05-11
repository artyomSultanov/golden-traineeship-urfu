// Скрытие / показ меню при скроллинге
let lastScroll = 0
const defaultOffset = 300

const header = document.getElementById('header')
const nav = document.querySelector('.header__nav')

const scrollPosition = () =>
  window.pageYOffset || document.documentElement.scrollTop

const containHide = () => nav.classList.contains('header__nav_hide')

window.addEventListener('scroll', () => {
  if (
    scrollPosition() > lastScroll &&
    !containHide() &&
    scrollPosition() > defaultOffset
  ) {
    nav.classList.add('header__nav_hide')
  } else if (scrollPosition() < lastScroll && containHide()) {
    nav.classList.remove('header__nav_hide')
  }

  lastScroll = scrollPosition()
})
