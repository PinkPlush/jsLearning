const paragraph = document.createElement('p');

paragraph.innerHTML = "hey, im red"
paragraph.style.color = 'red';
document.body.appendChild(paragraph);

const h3s = document.createElement('h3');
h3s.innerHTML = "hey, im a blue h3";
h3s.style.color = 'blue';
document.body.appendChild(h3s);

const div = document.createElement('div');
div.style.border = '2px solid black';
div.style.backgroundColor = 'pink';
document.body.appendChild(div);

const h1 = document.createElement('h1');
h1.textContent = "im in a div";
const p2 = document.createElement('p');
p2.textContent = "me too";
div.appendChild(h1);
div.appendChild(p2);


