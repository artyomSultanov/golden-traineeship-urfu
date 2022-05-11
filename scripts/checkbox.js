import { budgetContent, contractContent } from './basis-content.js'

// Обработка чекбокса
const checkbox = document.getElementById('basis-checkbox')
const budgetLabel = document.querySelector('.admission__header-budget')
const contractLabel = document.querySelector('.admission__header-contract')
const activeClass = 'admission__basis_active'
const basisContainer = document.getElementById('admission__basis')

checkbox.addEventListener('click', () => {
  if (checkbox.checked) {
    checkbox.checked = true
    budgetLabel.classList.remove(activeClass)
    contractLabel.classList.add(activeClass)
    basisContainer.innerHTML = contractContent
  } else {
    checkbox.checked = false
    budgetLabel.classList.add(activeClass)
    contractLabel.classList.remove(activeClass)
    basisContainer.innerHTML = budgetContent
  }
})
