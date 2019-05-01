const input = document.querySelector('.input');
const button = document.querySelector('.button');
const output = document.getElementById('output');
const dropdownLang = document.querySelector('.dropdownLang');




fetch('/language')
.then(result => result.json())
.then(data => dropDownGenerate(data))
.catch(err => console.log(err))

const dropDownGenerate = (data) => {
    console.log(data);
    const dropDown = data.map(i => {
        return  `<option id=${i.name} value=${i.code}> ${i.name} </option>`
     }).join('');

    dropdownLang.innerHTML = dropDown;  
}

button.addEventListener('click', () => fetchRequest(input.value));

const fetchRequest = (input) => {
    fetch(`/translate?=${input}`)
    .then(result => result.json())
    .then(data => populateOutput(data))
    .catch(error => console.log(error))
}

const populateOutput = (data) => {
    console.log(data);
    const text = document.createElement('p');
    text.textContent = data.translatedText;
    document.body.appendChild(text);
}


