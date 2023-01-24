// Ordene o array numbers em ordem crescente e imprima seus valores;
let numbersGrow = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbersGrow.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersGrow[index] < numbersGrow[secondIndex]) {
      let position = numbersGrow[index];
      numbersGrow[index] = numbersGrow[secondIndex];
      numbersGrow[secondIndex] = position;
    }
  }
}
console.log(numbersGrow);

// Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbersDec = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbersDec.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (numbersDec[index] > numbersDec[secondIndex]) {
      let position = numbersDec[index];
      numbersDec[index] = numbersDec[secondIndex];
      numbersDec[secondIndex] = position;
    }
  }
}
console.log(numbersDec);

// Agora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente
// no array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor do novo array deverá ser 45, pois é a multiplicação de 5
// (primeiro valor) e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, pois é a multiplicação de 9 (segundo valor) e
// 3 (valor seguinte), e assim por diante. Caso não haja próximo valor, a multiplicação deverá ser feita por 2. Faça isso utilizando o
// for e o método push. O resultado deve ser o array abaixo:
// [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54]

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiArr = [];
for (let index = 0; index < numbers.length; index += 1) {
  if (index === numbers.length - 1) {
    multiArr.push(numbers[index] * 2);
  } else {
    multiArr.push(numbers[index] * numbers[index+1]);
  }
}
console.log(multiArr);