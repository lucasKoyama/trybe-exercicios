// Crie um irmão para elementoOndeVoceEsta.
let irmao = document.createElement('section');
const pai = document.getElementById('pai');
pai.appendChild(irmao);
// Crie um filho para elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
const filho = document.createElement('section');
elementoOndeVoceEsta.appendChild(filho);
// Crie um filho para primeiroFilhoDoFilho.
const filhoDoFilho = elementoOndeVoceEsta.firstElementChild;
filhoDoFilho.id = 'filhoDoFilho'
filhoDoFilho.appendChild(filho);
// A partir desse filho criado, acesse terceiroFilho.
const terceiroFilho = document.getElementById('filhoDoFilho')
.parentElement // primeiroFilhoDoFilho
.parentElement // elementoOndeVoceEsta
.nextElementSibling; // terceiroFilho
console.log(terceiroFilho);