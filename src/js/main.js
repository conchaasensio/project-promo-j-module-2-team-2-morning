'use strict'

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

const palette1 = document.querySelector('.js-palette1');
const palette2 = document.querySelector('.js-palette2');
const palette3 = document.querySelector('.js-palette3');


//FORMULARIO
//Check Paleta de colores
const checkPalette1 = document.querySelector('.js-check1');
const checkPalette2 = document.querySelector('.js-check2');
const checkPalette3 = document.querySelector('.js-check3');

//Datos Formulario

//Objeto para crear los datos del formulario
const formData = {};

const cardFields = {
    fullname: document.querySelector('.js-text-name'),
    job: document.querySelector('.js-text-job'),
    emailAddress: document.querySelector('.js-mail'),
    telephone: document.querySelector('.js-number'),
    linkedin: document.querySelector('.js-linkedin'),
    github: document.querySelector('.js-github')
}

//Variables form
const inputName = document.querySelector('.js-input-name'); 
const inputJob = document.querySelector('.js-input-job');
const inputEmail = document.querySelector('.js-input-mail');
const inputPhone = document.querySelector('.js-input-phone');
const inputLinkedin = document.querySelector('.js-input-linkedin');
const inputGithub = document.querySelector('.js-input-github');


//Funcion que guarda los datos en el objeto y lo pinta en la tarjeta
function setData(ev) {
    const name = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;
    
    formData[name] = inputValue;
    cardFields[name].innerHTML = ev.currentTarget.value;
}


//Funcion que valida los datos

//Listeners 
inputName.addEventListener('keyup', setData);
inputJob.addEventListener('keyup', setData);
