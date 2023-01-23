// // Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética
// // básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
/*
const a = 2;
const b = 3;
// Adição (a + b)
let adicao = a + b;
console.log(adicao);

// Subtração (a - b)
let subtracao = a - b;
console.log(subtracao);

// Multiplicação (a * b)
let multiplicacao = a * b;
console.log(multiplicacao);

// Divisão (a / b)
let divisao = a / b;
console.log(divisao);

// Módulo (a % b)
let modulo = a % b;
console.log(modulo);
*/

// Utilize if/else para escrever um código que retorne o maior de dois números. Defina, no começo do seu código, duas constantes com os valores que serão comparados.
/*
const num1 = 50;
const num2 = 40;
const num3 = 30;
if (num1 > num2) {
  console.log(`${num1} é o maior número!`);
} else {
  console.log(`${num2} é o maior número`)
}
*/
// Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados.
/*
if (num1 > num2 && num1 > num3) {
  console.log(`${num1} é o maior número!`)
} else if (num2 > num1 && num2 > num3) {
  console.log(`${num2} é o maior número`)
} else {
  console.log(`${num3} é o maior número`)
}
*/
// Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.
/*
const parametro = 10;
if (parametro > 0) {
  console.log('positive');
} else if (parametro < 0) {
  console.log('negative');
} else {
  console.log('zero');
}
*/
// Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de 
// um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
/*
const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

let sumOfAngles = degreeAngleA + degreeAngleB + degreeAngleC;

let allAnglesArePositives = degreeAngleA > 0 && degreeAngleB > 0 && degreeAngleC > 0;

if(allAnglesArePositives){
  if (sumOfAngles === 180) {
    console.log(true);
  } else {
    console.log(false);
  };
} else {
  console.log('Erro: ângulo inválido');
}
*/

// Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
// Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
// sem aumentar a quantidade de condicionais.
// Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
/*
let peca = 'BISPO'
switch (peca.toLowerCase()) {
  case 'rei':
    console.log('Rei-> Uma casa apenas para qualquer direção.');
    break;
  case 'bispo':
    console.log('Bispo-> Diagonal.');
    break;
  case 'rainha':
    console.log('Rainha-> Diagonal, horizontal e vertical.');
    break;
  case 'cavalo':
    console.log('Cavalo -> "L" pode pular sobre as peças.');
    break;
  case 'torre':
    console.log('Torre -> Horizontal e vertical.');
    break;
  case 'peão':
    console.log("Peão -> Apenas uma casa para frente, no primeiro movimento podem ser duas casas.");
    break;
  // Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
  default:
    console.log('Erro, peça inválida!');
    break;
}
*/
// Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
/*
const nota = 95;
if (nota < 0 || nota > 100) { // O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
  console.log('Erro, notas abaixo de 0 e acima de 100 são consideradas inválidas!');
} else if (nota >= 90) { // Porcentagem >= 90 -> A
  console.log('A');
} else if (nota >= 80) { // Porcentagem >= 80 -> B
  console.log('B');
} else if (nota >= 70) { // Porcentagem >= 70 -> C
  console.log('C');
} else if (nota >= 60) { // Porcentagem >= 60 -> D
  console.log('D');
} else if (nota >= 50) { // Porcentagem >= 50 -> E
  console.log('E');
} else { // Porcentagem < 50 -> F
  console.log('F');
}
*/
// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. 
// Caso contrário, ele deve retornar false.
// Bonus: use somente um if.
/*
const num1 = 7;
const num2 = 8;
const num3 = 9;
let isEven = false;
if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
  isEven = true;
}
console.log(isEven);
*/
// Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. 
// Caso contrário, ele deve retornar false.
// Bonus: use somente um if.
/*
const num1 = 8;
const num2 = 8;
const num3 = 8;
let isOdd = false;
if (num1 % 2 !== 0 || num2 % 2 !== 0 || num3 % 2 !== 0) {
  isOdd = true;
}
console.log(isOdd);
*/
// Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda.
// A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.
// Atente que, sobre o custo do produto, incide um imposto de 20%.
// Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.
// O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.
// valorCustoTotal = valorCusto + impostoSobreOCusto;
// lucro = valorVenda - valorCustoTotal (lucro de um produto);
/*
const valorCusto = 10;
const valorVenda = 20;

if (valorCusto === 0 || valorVenda === 0) {
  console.log('Erro - Valor igual a zero! Nenhum dos valores pode ser igual a zero!')
} else {
  const valorCustoTotal = valorCusto * 1.2;
  const lucroTotal = (valorVenda - valorCustoTotal) * 1000;
  console.log(lucroTotal);
}
*/
// Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.
// Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.
// A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:
let paycheck = 3000;
// INSS (Instituto Nacional do Seguro Social)
let inss = 0;
if (paycheck <= 1556.94) { // Salário bruto até R$ 1.556,94: alíquota de 8%
  inss = paycheck * 0.08;
} else if (paycheck <= 2594.92) { // Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
  inss = paycheck * 0.09;
} else if (paycheck <= 5189.82) { // Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
  inss = paycheck * 0.11;
} else { // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
  inss = 570.88;
}
const basePaycheck = paycheck - inss;
// IR (Imposto de Renda)
let ir = 0;
if (basePaycheck <= 1903.98) { // Até R$ 1.903,98: isento de imposto de renda
  ir = 0;
} else if (basePaycheck <= 2826.65) { // De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
  ir = (basePaycheck * 0.075) - 142.80;
} else if (basePaycheck <= 3751.05) { // De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
  ir = (basePaycheck * 0.15) - 354.80;
} else if (basePaycheck <= 4664.68) { // De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
  ir = (basePaycheck * 0.225) - 636.13;
} else { // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.
  ir = (basePaycheck * 0.275) - 869.36;
}

console.log(`Salário: ${basePaycheck - ir}`);









