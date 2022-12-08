const button = document.querySelector('#main-btn');
const paragraph = document.querySelector('#paragraph');

function buttonClick() {
  paragraph.classList.toggle('hide');
}

button.addEventListener('click', buttonClick);
