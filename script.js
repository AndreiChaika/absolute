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
h1.textContent = 'Absolute Ear';
const p = document.createElement('p');
footer.appendChild(p);
p.textContent = 'Test 1';

const piano = document.createElement('section');
piano.classList.add('piano', 'animation');
main.appendChild(piano);
main.innerHTML = `div`

let keys = enLang;
for (let i = 0; i < keys.length; i += 1) {
  const row = document.createElement('div');
  row.classList.add('row');
  for (let j = 0; j < keys[i].length; j += 1) {
    const button = document.createElement('button');
    button.classList.add(...keys[i][j].class.split(' '));
    button.innerHTML = keys[i][j].name;
    button.id = keys[i][j].code;
    button.setAttribute(keys[i][j].property, true);
    row.appendChild(button);
  }
  keyboardbody.appendChild(row);
}