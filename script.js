import enLang from './enkeys.js';
import ruLang from './rukeys.js';

// Задал структуру
const header = document.createElement('header');
header.classList.add('animation');
document.body.appendChild(header);
const main = document.createElement('main');
document.body.appendChild(main);
const footer = document.createElement('footer');
footer.classList.add('animation');
document.body.appendChild(footer);
const h1 = document.createElement('h1');
header.appendChild(h1);
h1.textContent = 'Music Pitch';
const p = document.createElement('p');
footer.appendChild(p);
p.textContent = '<p>@ 2022 Copyright. All rights reserved1</p>';
const input = document.createElement('section');
input.classList.add('input', 'animation');
main.appendChild(input);
const textarea = document.createElement('textarea');
textarea.classList.add('textarea');
input.appendChild(textarea);
const keyboardbody = document.createElement('section');
keyboardbody.classList.add('keyboard', 'animation');
main.appendChild(keyboardbody);

// Перебор клавиш
let keys = enLang;
for (let i = 0; i < keys.length; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < keys[i].length; j += 1) {
    const button = document.createElement('button');
    button.classList.add(...keys[i][j].class.split(' '));
    button.innerHTML = keys[i][j].name;
    button.id = keys[i][j].code;
    button.setAttribute(keys[i][j].color, true);
    row.appendChild(button);
  }
  keyboardbody.appendChild(row);
}
const btnSymbols = document.querySelectorAll('button[printable]');
function findKey(code) {
  for (let i = 0; i < keys.length; i += 1) {
    for (let j = 0; j < keys[i].length; j += 1) {
      if (keys[i][j].code === code) return keys[i][j];
    }
  }
  return null;
}
function btnsClicked(event) {
  const { id } = event.currentTarget;
  if (findKey(id).location > 0) return;
  if (id === 'Enter' || id === 'Tab' || id === 'Space') return;
  insertSymbols(event.currentTarget.innerHTML);
}
btnSymbols.forEach((el) => el.addEventListener('click', btnsClicked));
