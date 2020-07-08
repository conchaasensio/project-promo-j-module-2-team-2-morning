/* eslint-disable no-undef */
'use strict';

//-------------------RESET------------------------
// get resetElement dom element
const resetElement = document.querySelector('.js-reset');

// clear all inputs
function reset(ev) {
  ev.preventDefault();
  localStorage.removeItem('userInfo');
  formData = {
    photo: '',
  };
  inputName.value = '';
  cardFields.name.innerHTML = 'Nombre Apellido';
  inputJob.value = '';
  cardFields.job.innerHTML = 'Front-end developer';
  inputEmail.value = '';
  cardFields.email.href = 'mailto:';
  inputPhone.value = '';
  cardFields.phone.href = 'tel:';
  inputLinkedin.value = '';
  cardFields.linkedin.href = 'https://linkedin.com/in/';
  inputGithub.value = '';
  cardFields.github.href = 'https://github.com/';
  profileImage.style.backgroundImage = `url(./assets/images/photo-card.jpg)`;
  profilePreview.style.backgroundImage = ``;

  palettes[0].checked = true;
  paletteStyle.classList.add('palette1');
  paletteStyle.classList.remove('palette2', 'palette3');
}

// listen click in reset button
resetElement.addEventListener('click', reset);
