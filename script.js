"use strict";
const lines = document.querySelectorAll('.line');
const button = document.getElementsByClassName('btn')[0];
let save = true;

const saveEdit = () => {
 if (save) {
  button.innerHTML = 'Edit';
  save = false;
} else {
 button.innerHTML = 'Save';
 save = true;
}

button.classList.toggle('edit-btn');
lineControls();
}

const lineControls = () => {
 lines.forEach((line) => {
   if (!save) {
     line.setAttribute("disabled", true);
   } else {
    line.removeAttribute("disabled");
   }
 });
}

const setLinesMaxWidth = () => {
 lines.forEach((line) => {
   line.setAttribute("maxlength", line.offsetWidth / 12);
 });
}
setLinesMaxWidth();

button.addEventListener('click', saveEdit);
window.addEventListener('resize', setLinesMaxWidth); 