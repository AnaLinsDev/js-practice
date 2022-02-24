const valorinp = document.querySelector('input')
const typeinp = document.querySelector('select')
let valor = ''
let type = ''
let base = ''

typeinp.addEventListener('change', (event) => {
    type = event.target.value
    getC(`https://api.exchangeratesapi.io/latest?symbols=`)
})

valorinp.addEventListener('keyup', (event) => {
    valor = event.target.value
    getC(`https://api.exchangeratesapi.io/latest?symbols=`)
})

function calcular(base,valor){
    if(!isNaN(base) & !isNaN(valor)){
        result(base*valor)
    }
}

function result(newres){
    var res = document.querySelector("h2.number");
    var newresformatado = newres.toLocaleString('en-ie', { style: 'currency', currency: 'EUR' })
    res.firstChild.nodeValue = newresformatado; 
}

function showdata(elements){
    for (x in elements.rates) {
        //console.log(x)
    if (type === 'CAD'){
         base = elements.rates.CAD
    }
    else if (type === 'USD'){
         base = elements.rates.USD
    }
    else if (type === 'BRL'){
         base = elements.rates.BRL
    }
}
    calcular(base, valor)
}

function getC(link){
    fetch(link)
    .then(response => response.json())
    .then(elements => showdata(elements))
  }

  
  