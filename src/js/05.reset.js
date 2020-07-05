/* eslint-disable no-undef */
'use strict';

//-------------------RESET------------------------
// get resetElement dom element
const resetElement = document.querySelector('.js-reset');

// clear all inputs
function reset(ev) {
  ev.preventDefault();
  inputName.value = '';
  inputJob.value = '';
  inputEmail.value = '';
  inputPhone.value = '';
  inputLinkedin.value = '';
  inputGithub.value = '';

  if ((inputName.value = '')) {
    cardFields.fullname.innerHTML = 'Nombre Apellido';
  } else if ((inputJob.value = '')) {
    cardFields.job.innerHTML = 'Front-end developer';
  }

  setPalette1();
}

// listen click in reset button
resetElement.addEventListener('click', reset);
