// Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n.
const n = 7;
const asterisco = '*';
let linha = '';
for (let i = 0; i < n; i += 1) {
  linha += asterisco;
}
// imprime o quadrado
for (let i = 0; i < n; i += 1) {
  console.log(linha);
}
console.log();

// Faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base.
linha = '';
for (let i = 0; i < n; i += 1) {
  linha += asterisco;
  console.log(linha);
}

// Agora inverta o lado do triângulo.
const space = ' ';
linha = '';
for (let spaces = n, ast = 1; spaces > 0; spaces -= 1, ast += 1) {
  for (let i = 0; i < spaces - 1; i += 1) {
    linha += space;
  }
  for (let i = 0; i < ast; i += 1) {
    linha += asterisco;
  }
  console.log(linha);
  linha = '';
}
console.log();


// Depois, faça uma pirâmide com n asteriscos de base:
linha = '';
const linhas = [];
for (let spaces = 0, ast = n; ast >= 1; ast -= 2, spaces += 1) {
  for (let i = 0; i < spaces; i += 1) {
    linha += space;
  }
  for (let i = 0; i < ast; i += 1) {
    linha += asterisco;
  }
  for (let i = 0; i < spaces; i += 1) {
    linha += space;
  }
  linhas.push(linha);
  linha = '';
}
// imprimir piramide
for (let i = linhas.length - 1; i >= 0; i -= 1) {
  console.log(linhas[i]);
}

// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar:
let middle = (n + 1) / 2;
let controlLeft = middle;
let controlRight = middle;
let symbol = '*';
for (let line = 1; line <= middle; line += 1) {
  let outputLine = '';
  for (let col = 1; col <= n; col += 1) {
    if (col == controlLeft || col == controlRight || line == middle) {
      outputLine += symbol;
    } else {
      outputLine += ' ';
    }
  }
  controlLeft -= 1;
  controlRight += 1;
  console.log(outputLine);
}

// Faça um programa que diz se um número definido numa variável é primo ou não.
let divisors = 1;
let numberToCheck = 31;

for (let number = 2; number <= numberToCheck; number += 1) {
  if (numberToCheck % number === 0) divisors += 1;
}

if (divisors === 2) console.log(numberToCheck + ' é primo');
else console.log(numberToCheck + ' não é primo');
