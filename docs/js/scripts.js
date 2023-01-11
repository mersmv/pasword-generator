
const range = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue')
const generateButton = document.getElementById('button')
const formElement = document.getElementById('form')

formElement.addEventListener('submit', e =>{
    e.preventDefault();
    generatePassword(Number(rangeValue.textContent))
})

range.addEventListener('change', (event) => {
    rangeValue.textContent=event.target.value;
})

function generatePassword (length){
    const alphabet = 'abcdefghijklmnñopqrstuvwxyz';
    let password = '';
    for (let i = 0; i < length; i++) {
        let result = (Math.floor(Math.random()* (alphabet.length-1)) +1);
        password += alphabet.charAt(result);
    }
    console.log(password)
}


