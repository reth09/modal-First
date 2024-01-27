'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btn = document.querySelectorAll('.show-modal');
const btnCose = document.querySelector('.close-modal');

function openModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}
function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for (var i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', openModal)
}
overlay.addEventListener('click', closeModal);
btnCose.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if(e.key=='Escape' && !modal.classList.contains('hidden')){
        closeModal();
    }
});
