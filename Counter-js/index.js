const minusinp = document.querySelector('button.minus')
const plusinp = document.querySelector('button.plus')
const valor = document.querySelector('p.value')
let number = 0
valor.innerHTML = `<h1 =>${number}<h1>`
minusinp.addEventListener('click', () => {
    number = number-1
    let color = getColor(number)
    valor.innerHTML = `<h1 style= "color:${color}" =>${number}<h1>`
})

plusinp.addEventListener('click', () => {
    number = number+1
    let color = getColor(number)
    valor.innerHTML = `<h1 style= "color:${color}" =>${number}<h1>`
})

function getColor(number) {
    let cor = ''
    if (number < 0) {
        cor = 'rgb(182, 9, 52)'
    }else if( number > 0){
        cor = 'rgb(12, 121, 2)'
    }else{
        cor = 'black'
    }
    return cor
  }