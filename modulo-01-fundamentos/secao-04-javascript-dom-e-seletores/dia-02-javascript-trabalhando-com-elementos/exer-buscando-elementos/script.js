// Acesse o elemento elementoOndeVoceEsta.
const elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
elementoOndeVoceEsta.parentNode.style.backgroundColor = 'yellow';
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
const primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho').textContent = 'firstChild.textContent';
// Acesse o primeiroFilho a partir de pai.
const pai = document.getElementById('pai');
console.log(pai.children[0]);
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
const primeiroFilho = elementoOndeVoceEsta.previousElementSibling
console.log(primeiroFilho);
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextSibling);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
console.log(elementoOndeVoceEsta.nextElementSibling);
// Agora acesse o terceiroFilho a partir de pai.
console.log(pai.lastElementChild.previousElementSibling);
