let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// One Click > on one click change color of the first button
let click = document.querySelector('a:nth-of-type(1)') // hiermee selecteer ik de eerste button

click.addEventListener('click', oneClick)

function oneClick() {
  click.classList.toggle('click')
}
// End function one click



