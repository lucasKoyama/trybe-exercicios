let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// Percorra o array imprimindo todos os valores nele contidos com a função console.log();
for (let number of numbers) {
  console.log(number);
}

// Some todos os valores contidos no array e imprima o resultado;
let total = 0;
for (let number of numbers) {
  total += number;
}
console.log(total);

// Calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.
const media = total/numbers.length;
console.log(media);

// Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”.
// Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;
if (media > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

// Utilizando for, descubra qual o maior valor contido no array e imprima-o;
biggestNum = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > biggestNum) {
    biggestNum = numbers[index]
  }
}
console.log(biggestNum);

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;
let odd = 0;
for (let num of numbers) {
  if (num % 2 !== 0) {
    odd += 1;
  }
}
if (odd === 0) {
  console.log('nenhum valor ímpar encontrado');
} else {
  console.log(`quantidade de números ímpares encontrados: ${odd}`);
}

// Utilizando for, descubra qual o menor valor contido no array e imprima-o;
smallestNum = biggestNum;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] < smallestNum) {
    smallestNum = numbers[index]
  }
}
console.log(smallestNum);

// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;
let nums = [];
for (let index = 1; index <= 25; index += 1) {
  nums.push(index);
}
console.log(nums);

// Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.
for (let index = 0; index < nums.length; index += 1) {
  console.log(nums[index] / 2)
}
