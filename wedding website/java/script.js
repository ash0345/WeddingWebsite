const button = document.getElementById('button');
const bridesmaidList = document.getElementById('bridesmaids');
const groomsmenList = document.getElementById('groomsmen');
let userTextInput = document.getElementById('name-input');

button.addEventListener('click', () => {

    let newPersonListItem = document.createElement('li');
    // console.log(newPersonListItem);
    newPersonListItem.innerText = userTextInput.value;
    bridesmaidList.appendChild(newPersonListItem);
});