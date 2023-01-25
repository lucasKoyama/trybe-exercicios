// crie um algoritmo que imprima na tela o fatorial de 10.
let f = 10;
let fatorial = 1;
for (let i = 1; i < f; i += 1) {
  fatorial += i * fatorial;
}
console.log(fatorial);

// Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.
let palavra = 'banana'
let invertida = '';
for (let c = palavra.length - 1; c >= 0; c -= 1) {
  invertida += palavra[c];
}
console.log(invertida);

// Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
// Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro 
// que imprima a menor. Considere o número de caracteres de cada palavra.
let biggestWord = '';
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > biggestWord.length) {
    biggestWord = array[i];
  }
}
let smallestWord = biggestWord;
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < smallestWord.length) {
    smallestWord = array[i];
  }
}
console.log(`Maior palavra: ${biggestWord} \nMenor palavra: ${smallestWord}`);