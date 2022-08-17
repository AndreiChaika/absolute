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
p.textContent = 'Test 3';

const piano = document.createElement('section');
piano.classList.add('piano', 'animation');
main.appendChild(piano);
