const input = document.querySelector('.input');
const button = document.querySelector('.button');
const output = document.getElementById('output');

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


