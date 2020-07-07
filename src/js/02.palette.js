'use strict';

//FORMULARIO
//Check Paleta de colores
const paletteStyle = document.querySelector('.preview__card');
const palettes = document.querySelectorAll('.js-check');
palettes[0].checked = true;

function changePalette(ev) {
  paletteStyle.classList.remove('palette1', 'palette2', 'palette3');
  if (ev.currenTarget === palettes[0]) {
    paletteStyle.classList.add('palette1');
  } else if (ev.currentTarget === palettes[1]) {
    paletteStyle.classList.add('palette2');
  } else if (ev.currentTarget === palettes[2]) {
    paletteStyle.classList.add('palette3');
  }
  addPaletteObject(ev);
}
function addPaletteObject(ev) {
  const name = ev.currentTarget.name;
  const inputValue = ev.currentTarget.value;

  formData[name] = inputValue;
}

for (const palette of palettes) {
  palette.addEventListener('change', changePalette);
}
