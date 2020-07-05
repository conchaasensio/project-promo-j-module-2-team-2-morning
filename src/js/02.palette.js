'use strict';

//FORMULARIO
//Check Paleta de colores
const paletteStyle = document.querySelector('.preview__card');
const palettes = document.querySelectorAll('.js-check');

function changePalette(ev) {
  if (ev.target === palettes[0]) {
    paletteStyle.classList.add('palette1');
    paletteStyle.classList.remove('palette2');
    paletteStyle.classList.remove('palette3');
  } else if (ev.currentTarget === palettes[1]) {
    paletteStyle.classList.add('palette2');
    paletteStyle.classList.remove('palette1');
    paletteStyle.classList.remove('palette3');
  } else if (ev.currentTarget === palettes[2]) {
    paletteStyle.classList.add('palette3');
    paletteStyle.classList.remove('palette2');
    paletteStyle.classList.remove('palette1');
  }
}

for (const palette of palettes) {
  palette.addEventListener('change', changePalette);
  palette.addEventListener('change', function (ev) {
    const name = ev.currentTarget.name;
    const inputValue = ev.currentTarget.value;

    formData[name] = inputValue;
  });
}
