'use strict';

//-------------------RESET------------------------
// get resetElement dom element
const resetElement = document.querySelector('.js-reset');

// clear all inputs
function reset() {
  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';

  cardFields.fullname.innerHTML = 'Nombre Apellido';
  cardFields.job.innerHTML = 'Front-end developer';
}

// listen click in reset button
resetElement.addEventListener('click', reset);
resetElement.addEventListener('click', setPalette1);

function changeToRed() {
  console.log('changeToRed');
  document.querySelector('.preview__container').classList.add('palette1');
