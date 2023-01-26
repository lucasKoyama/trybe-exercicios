// 1 - (Bônus) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa. - maybe need some fix!
const romanos = {
  'I': 1,
  'V': 5,
  'X': 10,
  'L': 50,
  'C': 100,
  'D': 500,
  'M': 1000,
};

function roman2num(string) {

  let num = 0;

  // Verifica se é um número romano válido
  if (string.length <= 5) {
    // se a próxima letra romana for maior que a atual substrai, se não adiciona ao total
    for (let i = 0; i < string.length; i += 1) {
      if (string[i] < string[i+1]) {
         // adiciona
          num += romanos[string[i]];
       } else {
         // subtrai
           num -= romanos[string[i]];
       }
     }
  } else {
    console.log('romano inválido');
    return;
  }
  return num * -1;
}
console.log(roman2num('XVIII'));

// 2- Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro.
let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];
// Através de um loop for, percorra essa variável, busque os números pares e os adicione a um novo array, que deverá ser retornado ao final pela função.
function arrayOfNumbers(arr) {
  let evenArray = [];
  for (let array in vector) {
    for (let num of vector[array]) {
      if ( num % 2 === 0) {
        evenArray.push(num);
      }
    }
  }
  return evenArray;
}
console.log(arrayOfNumbers(vector));
console.log();

// 3 - A partir do array de frutas basket, retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela
// aparece no array como valor. Por exemplo, o array [‘Melancia’, ‘Abacate’, ‘Melancia’, ‘Melancia’, ‘Uva’], deverá retornar
// { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.
const basket = [
  'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
  'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
  'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
  'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
  'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
  'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
  'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
  'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
  'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
  'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
  'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
  'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
  'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
  'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
  'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
  'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
  'Banana', 'Pera', 'Abacate', 'Uva',
];

const uniqueFruits = [...new Set(basket)]; // criar um array com apenas as frutas, sem as repetidas
const uniqueFruitsQtd = new Array(uniqueFruits.length);
uniqueFruitsQtd.fill(0);
for (let item of basket) {
  uniqueFruitsQtd[uniqueFruits.indexOf(item)] += 1;
}
const fruits = Object.fromEntries(uniqueFruits.map((key, i) => [key, uniqueFruitsQtd[i]]));

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...
for (let fruit in fruits) {
  console.log(`Sua cesta possui: ${fruits[fruit]} ${fruit}s`)
}
console.log();

// ----

let moradores = {
  blocoUm: [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      andar: 10,
      apartamento: 1005,
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
  ],
  blocoDois: [
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ],
};
// 4 - Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato:
// “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.
let ultimoBloco2 = moradores.blocoDois[moradores.blocoDois.length - 1];
console.log(`O morador do bloco 2 de nome ${ultimoBloco2.nome} ${ultimoBloco2.sobrenome} mora no ${ultimoBloco2.andar}° andar, apartamento ${ultimoBloco2.apartamento}`);

// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome.
// Depois faça o mesmo para os moradores do bloco 2.
function moradoresInfo(bloco) {
  for (let info of moradores[bloco]) {
    console.log(`${bloco} moradores: ${info.nome} ${info.sobrenome}`);
  }
}
moradoresInfo('blocoUm');
moradoresInfo('blocoDois');
console.log();
