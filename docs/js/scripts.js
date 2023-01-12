
const range = document.getElementById('range');
const rangeValue = document.getElementById('rangeValue')
const inputPassword = document.getElementById('inputpassword')
const generateButton = document.getElementById('button')
const formElement = document.getElementById('form')
const numbers = document.getElementById('numbers')
const symbols = document.getElementById('symbols')
const upperCase = document.getElementById('uppercase')
const lowerCase = document.getElementById('lowercase')
const strenghtValue = document.getElementById('strengthValue')


formElement.addEventListener('submit', e =>{
    e.preventDefault();
    generatePassword(Number(rangeValue.textContent))
})

range.addEventListener('change', (event) => {
    rangeValue.textContent=event.target.value;
})

function generatePassword (length){
    const alphabet = checkboxs()
    let password = '';
    for (let i = 0; i < length; i++) {
        let result = (Math.floor(Math.random()* (alphabet.length-1)) +1);
        password += alphabet.charAt(result);
    }
    inputPassword.value=password;
    console.log(password)
}
 
function checkboxs () {
    let alphabet = '';
    if(numbers.checked){
       alphabet += '1234567890';
    }
    if(symbols.checked){
        alphabet += '!#$%&())*+,-./:;<=>?@[\]^_`{|}~'
    }  
   if(upperCase.checked){
        alphabet += 'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ'
    }
    if(lowerCase.checked) {
        alphabet += 'abcdefghijklmnñopqrstuvwxyz'
    }
    return alphabet;
}


 formElement.addEventListener('change', (e) => {
    const checked = document.querySelectorAll('input:checked');
  if(Number(rangeValue.textContent)<=5){
    strenghtValue.textContent='too short';}
  else{
  if(checked.length===0){
    strenghtValue.textContent=''
    }
  if (checked.length===1){
    strenghtValue.textContent='too weak'
  }
  if (checked.length===2){
    strenghtValue.textContent='weak'
  }
  if (checked.length===3){
    strenghtValue.textContent='normal'
  }
  if (checked.length===4){
    strenghtValue.textContent='strong'
  }}

});

generatePassword(Number(rangeValue.textContent), checkboxs)