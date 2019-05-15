const input = document.querySelector('.input');
const button = document.querySelector('.button');
const output = document.getElementById('output');
const dropdownLang = document.getElementById('Lang');




fetch('/language')
.then(result => result.json())
.then(data => dropDown(data))
.catch(err => console.log(err , 'This is err in dom.js'))


  const dropDown = (data)=> {
      return data.map(i => {
       const opt = document.createElement('option')
     opt.value = i.code;
     opt.textContent = i.name;
     dropdownLang.appendChild(opt);
     });
    }

button.addEventListener('click', () => fetchRequest(input.value, dropdownLang.value));

const fetchRequest = (input, lang) => {
    fetch(`/translate?=${input}=${lang}`)
    .then(result => result.json())
    .then(data => {populateOutput(data)})
    .catch(error => console.log(error, 'This is also in dom.js'))
}

const populateOutput = (data) => {
    console.log(data, 'This is data in dom.js');
    const text = document.createElement('p');
    text.textContent = data.translatedText;
    document.body.appendChild(text);
}
