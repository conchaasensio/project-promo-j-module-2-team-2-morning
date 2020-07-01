'use strict';

/* VARIABLES */

//Pasar a CSS creando una clase con los colores de cada paleta
/* .palette1 {
    color:
    & h1 {
        color:
    }
    & p{
        color:
    }
} */

// const palette1 = document.querySelector('.js-palette1');
// const palette2 = document.querySelector('.js-palette2');
// const palette3 = document.querySelector('.js-palette3');

//FORMULARIO
//Check Paleta de colores
const paletteClassList = document.querySelector('.preview__container')
  .classList;

const checkPalette1 = document.querySelector('.js-check1');
function setPalette1() {
  paletteClassList.add('palette1');
  paletteClassList.remove('palette2', 'palette3');
}
checkPalette1.addEventListener('click', setPalette1);

const checkPalette2 = document.querySelector('.js-check2');
function setPalette2() {
  paletteClassList.add('palette2');
  paletteClassList.remove('palette1', 'palette3');
}
checkPalette2.addEventListener('click', setPalette2);

const checkPalette3 = document.querySelector('.js-check3');
function setPalette3() {
  paletteClassList.add('palette3');
  paletteClassList.remove('palette1', 'palette2');
}
checkPalette3.addEventListener('click', setPalette3);

/*--------------------Datos Formulario--------------- */

//Objeto para crear los datos del formulario
const formData = {};

//Objeto que tiene todas las clases de la card para poder pintarlas
const cardFields = {
  fullname: document.querySelector('.js-text-name'),
  job: document.querySelector('.js-text-job'),
  emailAddress: document.querySelector('.js-mail'),
  telephone: document.querySelector('.js-number'),
  linkedin: document.querySelector('.js-linkedin'),
  github: document.querySelector('.js-github'),
};

//Variables con input del form
const inputName = document.querySelector('.js-input-name');
const inputJob = document.querySelector('.js-input-job');
const inputEmail = document.querySelector('.js-input-mail');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');
const formButton = document.querySelector('.js-share'); //Variable boton del form
const textShare = document.querySelector('.js-textShare'); //Variable del texto oculto de compartir

//Funcion que guarda los datos en el objeto y lo pinta en la tarjeta el texto
function setData(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;

  formData[name] = inputValue;
  cardFields[name].innerHTML = ev.currentTarget.value;
}

//Funcion que guarda los datos en el objeto y añade los links
function changeLinks(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;

  formData[name] = inputValue;
  cardFields[name].href = ev.currentTarget.value;
}

//Funcion que valida los datos
function validation(ev) {
  ev.preventDefault();

  if (
    inputName.value.length > 1 &&
    inputJob.value.length > 1 &&
    inputEmail.value.length > 1 &&
    inputPhone.value.length > 1 &&
    inputLinkedin.value.length > 1 &&
    inputGithub.value.length > 1
  ) {
    console.log('hola');
    textShare.classList.remove('hidden');
    formButton.classList.add('disabled');
  } else {
    alert('No has introducido ningún dato');
  }
}

//Listeners
inputName.addEventListener('keyup', setData);
inputJob.addEventListener('keyup', setData);
inputEmail.addEventListener('keyup', changeLinks);
inputPhone.addEventListener('keyup', changeLinks);
inputLinkedin.addEventListener('keyup', changeLinks);
inputGithub.addEventListener('keyup', changeLinks);
formButton.addEventListener('click', validation);

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
}

// COLLAPSIBLE SECTIONS
const arrowTransform1 = document.querySelector('.js-arrowTransform1');
const arrowTransform2 = document.querySelector('.js-arrowTransform2');
const arrowTransform3 = document.querySelector('.js-arrowTransform3');
const arrow1 = document.querySelector('.js-arrow1');
const arrow2 = document.querySelector('.js-arrow2');
const arrow3 = document.querySelector('.js-arrow3');
const collapsible = document.querySelector('.js-collapsed');
const collapsibleHidden1 = document.querySelector('.js-hidden1');
const collapsibleHidden2 = document.querySelector('.js-hidden2');
const collapsibleHidden3 = document.querySelector('.js-hidden3');

console.log(arrowTransform3);

function changeCollapsible1() {
  collapsibleHidden1.classList.toggle('hidden');
  arrowTransform1.classList.toggle('transform');
}
function changeCollapsible2() {
  collapsibleHidden2.classList.toggle('hidden');
  arrowTransform2.classList.toggle('transform');
}
function changeCollapsible3() {
  collapsibleHidden3.classList.toggle('hidden');
  arrowTransform3.classList.toggle('transform');
}

arrow1.addEventListener('click', changeCollapsible1);
arrow2.addEventListener('click', changeCollapsible2);
arrow3.addEventListener('click', changeCollapsible3);
