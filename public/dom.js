const input = document.querySelector('input');
const button = document.querySelector('button')

button.addEventListener('click', () => fetchRequest(input.value));

const fetchRequest = (input) => {
    fetch(`/translate?=${input}`)
    .then(result => result.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}

