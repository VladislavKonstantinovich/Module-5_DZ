const imgs = document.querySelectorAll('img');

const showSrc = function() {
    alert(this.getAttribute('src'));
}

for (const img of imgs) {
    img.addEventListener('click', showSrc);
}

// ----------------------

const link = document.querySelector('a');
const href = link.getAttribute('href');
let i = 0;

function hrefAdd() {
	if (i===0) {
		link.textContent += '   ' + href;
		console.log(href);
	}
	i++;
}

link.addEventListener('mousemove', hrefAdd.bind(link));
link.removeEventListener('mousemove', hrefAdd.bind(link));
// здесь удаляется EventListener

// -----------------------

let inputs = document.querySelectorAll('input');
let text = document.querySelector('#text');

const print = function() {
    text.textContent = this.value;
}

for (const a of inputs) {
    a.addEventListener('focusout', print);
}

// -----------------------

let index = 0;

const alertF = function() {
    if (index === 0) {
        alert(this.value);
        index++;    
    }
}

for (const b of inputs) {
    b.addEventListener('click', alertF);
}

// При первом нажатии на input, в нём нет текста, так что в этом случае бессмысленно делать алерт только первый раз
// ------------------------

let number = document.querySelectorAll('.number');

const pow = function() {
    this.textContent = Math.pow(this.textContent, 2);
}

for (const d of number) {
    d.addEventListener('click', pow);
}

// ----------------------

let divs = document.getElementsByClassName('div');
let container = document.getElementsByClassName('containerP')

const paintGreen = function() {
    this.style.backgroundColor = 'rgb(14, 117, 14)';
};

const paintRed = function() {
    this.style.backgroundColor = 'rgb(221, 40, 40)';
};

container[0].onclick = function () {
    for (let x of divs) {
        if (x.getAttribute('style') === 'background-color: rgb(221, 40, 40);') {
            x.addEventListener('click', paintGreen)
        } else if (x.getAttribute('style') === 'background-color: rgb(14, 117, 14);') {
            x.removeEventListener('click', paintGreen);
            x.addEventListener('click', paintRed);
            
        } else {
            x.addEventListener('click', paintRed);
        }
    }
}