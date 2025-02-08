// Women 
const button = document.getElementById('button');
const bridesmaidList = document.getElementById('bridesmaids');
let userTextInput = document.getElementById('name-input');

// Bridesmaids functions
clearText = () => {
    userTextInput.value = '';
}

button.addEventListener('click', () => {
    let newPersonListItem = document.createElement('li');
    newPersonListItem.innerText = userTextInput.value;
    newPersonListItem.classList.add("name");
    bridesmaidList.appendChild(newPersonListItem);
    clearText();
});

// Men
const button2 = document.getElementById('button2');
const groomsmenList = document.getElementById('groomsmen');
let userInputMen = document.getElementById('name-input-men');

// Groomsmen function
clearTextMen = () => {
    userInputMen.value = '';
}

button2.addEventListener('click', () => {
    let newGroomsmenListItem = document.createElement('li');
    newGroomsmenListItem.innerText = userInputMen.value;
    newGroomsmenListItem.classList.add('name');
    groomsmenList.appendChild(newGroomsmenListItem);
    clearTextMen();
});

// Removing Items ----- need help with how to get remove to work!!
const names = document.querySelectorAll('.name');

names.forEach(name => name.addEventListener('click', (event) => {
    name.remove();
}))