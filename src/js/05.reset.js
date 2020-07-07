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
  palettes[0].checked = true;
  paletteStyle.classList.add('palette1');
  paletteStyle.classList.remove('palette2');
  paletteStyle.classList.remove('palette3');

  localStorage.removeItem('userInfo');
}

// listen click in reset button
resetElement.addEventListener('click', reset);
