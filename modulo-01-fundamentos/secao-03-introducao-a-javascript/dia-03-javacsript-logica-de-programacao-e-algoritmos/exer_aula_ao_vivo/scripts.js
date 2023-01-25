// 1 - Faça um algoritmo que calcule a soma de 1 a 50 usando a estrutura "for" e retorne no formato:
// A soma total de 1 a 50 é:
/*
let somaTotal = 0;
for (let index = 1; index <= 50; index += 1) {
  somaTotal += index;
}
console.log("A soma total de 1 a 50 é: " + somaTotal);
*/

// 2 - Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.
/*
let divisiveisPor3 = 0;
for (let index = 2; index <= 150; index += 1) {
  if (index % 3 === 0) {
    divisiveisPor3 += 1;
  }
}
if (divisiveisPor3 === 50) {
  console.log("Uma mensagem secreta");
}
*/

// 3 - Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando FINALIZAR
// e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 
/*
let jogadas = ["pedra", "papel", "tesoura"];
let random1 = Math.floor(Math.random() * 2);
let random2 = Math.floor(Math.random() * 2);
console.log(jogadas[random1]);
console.log(jogadas[random2]);
*/

// 4- Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.
/*
let pessoa = 'Lucas';
let idade = 22;
idade >= 18 ? console.log(pessoa + " é maior de idade") : console.log("Não");
*/

// 5 - Crie um algoritmo que recebe a idade de Carolzita , Flavio e Noel e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.
/*
let idadePessoas = [22, 30, 45];
let pessoas = ["Carolzita", "Flavio", "Noel"];

let menorIdade = idadePessoas[0];
for (let index = 1; index < idadePessoas.length; index += 1) {
  if (idadePessoas[index] < menorIdade) {
    menorIdade = idadePessoas[index];
    console.log(pessoas[index] + "é a mais nova");
  } else {
    console.log(pessoas[idadePessoas.indexOf(menorIdade)] + " é a mais nova");
  }
}
*/
