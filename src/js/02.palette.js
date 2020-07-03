'use strict';

//FORMULARIO
//Check Paleta de colores
// const paletteClassList = document.querySelector('.preview__container')
//   .classList;

const checkPalettes = document.querySelectorAll('.js-check:checked');
const checkPalettesValue = parseInt(checkPalettes.value);

function changePalette(ev) {
  /* const selectPalette = ev.currentTarget.checked; */
  checkPalettes.ClassList.remove('palette1', 'palette2', 'palette3');
  if (checkPalettes === true) {
    if (checkPalettesValue === 1) {
      checkPalettes.ClassList.add('palette1');
      formData[name] = checkPalettesValue;
    }
    if (checkPalettesValue === 2) {
      checkPalettes.ClassList.add('palette2');
    }
    if (checkPalettesValue === 3) {
      checkPalettes.ClassList.add('palette3');
    }
  }
}
checkPalettes.addEventListener('change', changePalette);

/* function setPalette1() {
  paletteClassList.add('palette1');
  paletteClassList.remove('palette2', 'palette3');
} */
// checkPalette1.addEventListener('click', setPalette1);

// const checkPalette2 = document.querySelector('.js-check2');
// function setPalette2() {
//   paletteClassList.add('palette2');
//   paletteClassList.remove('palette1', 'palette3');
// }
// checkPalette2.addEventListener('click', setPalette2);

// const checkPalette3 = document.querySelector('.js-check3');
// function setPalette3() {
//   paletteClassList.add('palette3');
//   paletteClassList.remove('palette1', 'palette2');
// }
// checkPalette3.addEventListener('click', setPalette3);
