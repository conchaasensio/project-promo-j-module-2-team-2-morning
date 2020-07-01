'use strict';

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
