let interaction = document.querySelector('a:nth-of-type(12)')

interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)

function jumpHandler() {
  interaction.classList.toggle('jump')
}


// One Click > Wanneer de eerste button 1 keer wordt geklikt veranderd de kleur van de button
let oneClick = document.querySelector('a:nth-of-type(1)') // hiermee selecteer ik de eerste button

oneClick.addEventListener('click', jumpBackground)

function jumpBackground() {
  this.classList.toggle('changeBackground')
}
// End function one click



// Dubbel click > Met dubbel click krijgt de 2e button een andere kleur achtergrond
let dubbelClick = document.querySelector('a:nth-of-type(2)')

dubbelClick.addEventListener('dblclick', jumpBackground)

// End Dubbel click