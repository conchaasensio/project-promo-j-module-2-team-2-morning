'use strict';

/*--------------------Datos Formulario--------------- */

//Objeto para crear los datos del formulario
const formData = {
  photo: '',
};

//Objeto que tiene todas las clases de la card para poder pintarlas
const cardFields = {
  palette: document.querySelector('.js-check:checked').value,
  name: document.querySelector('.js-text-name'),
  job: document.querySelector('.js-text-job'),
  email: document.querySelector('.js-mail'),
  phone: document.querySelector('.js-number'),
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
  updateCard();
}

function updateCardText(name, placeholder) {
  cardFields[name].innerHTML = formData[name] || placeholder;
}

//Funcion que guarda los datos en el objeto
function setLinks(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;
  formData[name] = inputValue;
  updateCard();
}

//Funcion que imprime los datos en la tarjeta
function updateCardLinks(name, prefix) {
  cardFields[name].href = prefix + formData[name];
}

//Funcion que actualiza los datos de la tarjeta
function updateCard() {
  updateCardText('name', 'Nombre Apellido');
  updateCardText('job', 'Front-end developer');
  updateCardLinks('email', 'mailto:');
  updateCardLinks('phone', 'tel:');
  updateCardLinks('linkedin', 'https://linkedin.com/in/');
  updateCardLinks('github', 'https://github.com/');
  updateCardPhoto();
}

//Funcion que guarda los datos de la imagen en el objeto
function setPhoto(photo) {
  formData.photo = photo;
  updateCard();
}

//funcion que imprime la imagen en la tarjeta y preview
function updateCardPhoto() {
  profileImage.style.backgroundImage = `url(${formData.photo})`;
  profilePreview.style.backgroundImage = `url(${formData.photo})`;
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
    textShare.classList.remove('hidden');
    formButton.classList.add('disabled');
  } else {
    alert('No has introducido ningún dato');
  }

  sendRequest(formData);
}

//------------------PETICION AL SERVIDOR - FETCH---------------------
const linkShare = document.querySelector('.js-linkShare');

function sendRequest(formData) {
  fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
    method: 'POST',
    body: JSON.stringify(formData),
    headers: {
      'content-type': 'application/json',
    },
  })
    .then(function (resp) {
      return resp.json();
    })
    .then(function (result) {
      showURL(result);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function showURL(result) {
  if (result.success) {
    linkShare.innerHTML =
      '<a href=' +
      result.cardURL +
      ' target="_blank">' +
      result.cardURL +
      '</a>';
    /* twitterShare(result.cardURL); */
  } else {
    linkShare.innerHTML = 'ERROR:' + result.error;
  }
}

//----------------------BOTON TWITTER------------------------------
/* function twitterShare(miURL) {
  const twitterURL = document.querySelector('.js-twitter');
  const tweet ='Esta es nuestra Gryffincode Awesome Profile Cards';
  twitterURL.href = `http://twitter.com/share?text=`${tweet}`&hashtags=adalaber,promoJemison,profileCards&user_mentions=Adalab_Digital&url=${miURL}`;
} */
//---------------------LOCAL STORAGE--------------------------------------

//Guardamos los datos en el localStorage
document.addEventListener('keyup', function () {
  localStorage.setItem('userInfo', JSON.stringify(formData));
});

//recuperar datos al refrescar
function uploadInfo() {
  const savedInfo = JSON.parse(localStorage.getItem('userInfo'));
  if (savedInfo !== null) {
    formData.name = savedInfo.name;
    inputName.value = savedInfo.name;
    formData.job = savedInfo.job;
    inputJob.value = savedInfo.job;
    formData.email = savedInfo.email;
    inputEmail.value = savedInfo.email;
    formData.phone = savedInfo.phone;
    inputPhone.value = savedInfo.phone;
    formData.linkedin = savedInfo.linkedin;
    inputLinkedin.value = savedInfo.linkedin;
    formData.github = savedInfo.github;
    inputGithub.value = savedInfo.github;
    // profileImage.style.backgroundImage = `url(${savedInfo.photo})`;
    // profilePreview.style.backgroundImage = `url(${savedInfo.photo})`;
    if (savedInfo.palette) {
      document.querySelector(
        '.js-check#color' + savedInfo.palette
      ).checked = true;
    }
    updateCard();
  } else {
    console.log('No hay datos en el localStorage');
  }
  console.log(formData);
}
uploadInfo();

//------------------------------------------------

//Listeners
inputName.addEventListener('keyup', setData);
inputJob.addEventListener('keyup', setData);
inputEmail.addEventListener('keyup', setLinks);
inputPhone.addEventListener('keyup', setLinks);
inputLinkedin.addEventListener('keyup', setLinks);
inputGithub.addEventListener('keyup', setLinks);
formButton.addEventListener('click', validation);
