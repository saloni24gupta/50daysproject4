const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppsercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numberEl = document.getElementById('numbers')
const clipboardEl = document.getElementById('clipboard')
const generateEl = document.getElementById('generate')
const symbolEl = document.getElementById('symbols')
const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol,

}

generateEl.addEventListener('click', () => {
    const length = lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppsercaseEl.checked
    const hasNumber = numberEl.checked
    const hasSymbol = symbolEl.checked
    resultEl.innerText  = generatePassword(hasLower, hasNumber, hasSymbol, hasUpper, length)
   
})

function generatePassword(lower, upper, number, symbol, length) {
    
}
function getRandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97) 
}

function getRandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65) 
}

function getRandomNumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48) 
}

function getRandomSymbol() {
    const symbols = '!@#$%^&*()+,._-{}[]/?='
    return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(getRandomSymbol())