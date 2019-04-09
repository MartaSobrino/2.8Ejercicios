'use strict';

const face = document.querySelector('.face');
const head = document.querySelector('.head');

function wink() {
    return face.innerHTML = ';)';
}

head.addEventListener('click', wink);

function normal() {
    return face.innerHTML = ':)';
}

head.addEventListener('mouseout', normal);