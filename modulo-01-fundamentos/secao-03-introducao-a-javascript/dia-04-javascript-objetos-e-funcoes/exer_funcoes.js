// Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b, definidas no começo
// com os valores que serão operados. Faça programas para:
const a = 2;
const b = 3;
const c = 4;

// Adição (a + b)
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(a,b));

// Subtração (a - b)
function sub(num1, num2) {
  return num1 - num2;
}
console.log(sub(a,b));

// Multiplicação (a * b)
function multiplicacao(num1, num2) {
  return num1 * num2;
}
console.log(multiplicacao(a,b));

// Divisão (a / b)
function div(num1, num2) {
  return num1 / num2;
}
console.log(div(a,b));

// Módulo (a % b)
function mod(num1, num2) {
  return num1 % num2;
}
console.log(mod(a,b));

// Faça um programa que retorne o maior de dois números. Defina, no começo do programa, duas constantes com os valores que serão comparados.
function maiorDeDois(num1, num2) {
  console.log("maior de dois");
  if (num1 > num2) {
    console.log(`${num1} é o maior número!`);
  } else {
    console.log(`${num2} é o maior número`)
  }
}
maiorDeDois(a,b);

// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.
function maiorDeTres(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} é o maior número!`)
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} é o maior número`)
  } else {
    console.log(`${num3} é o maior número`)
  }
}
maiorDeTres(a,b,c);

// Faça um programa que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo,
// e caso não seja nem positivo e nem negativo retorne “zero”.
function numSignal(num1) {
  if (num1 > 0) {
    console.log('positive');
  } else if (num1 < 0) {
    console.log('negative');
  } else {
    console.log('zero');
  }
}
numSignal(a);

// Faça um programa que receba três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos
// representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, o programa deve retornar uma mensagem de erro.
const degreeAngleA = 65;
const degreeAngleB = 100;
const degreeAngleC = 15;

function isTriangle(angle1, angle2, angle3) {

  let sumOfAngles = angle1 + angle2 + angle3;
  
  let allAnglesArePositives = angle1 > 0 && angle2 > 0 && angle3 > 0;
  
  if(allAnglesArePositives){
    if (sumOfAngles === 180) {
      console.log(true);
    } else {
      console.log(false);
    };
  } else {
    console.log('Erro: ângulo inválido');
  }
}

isTriangle(degreeAngleA, degreeAngleB, degreeAngleC);

