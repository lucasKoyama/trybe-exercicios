/*Array Destructuring exers*/
// Produza o mesmo resultado do código, porém utilizando o array destructuring para recolher a função e a saudação.
const primeNumbers = [17, 23, 37]

const sum = (a, b) => {
  console.log(a + b);
}

sum(primeNumbers[0], primeNumbers[2]) // 54

// Produza o mesmo resultado acima, porém utilizando array destructuring
const [num1, num2, num3] = primeNumbers;
sum(num1, num3);

// A seguir, temos alguns valores que estão descritos em variáveis incoerentes.
// Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo
[comida, animal, bebida] = [bebida, comida, animal];
console.log(comida, animal, bebida); // arroz gato água


// O array abaixo possui alguns números que não condizem com o conteúdo que ele deveria possuir.
// Através de array destructuring, faça com que existam apenas números pares na variável numerosPares.
let numerosPares = [1, 3, 5, 6, 8, 10, 12];

console.log(numerosPares); // [6, 8, 10, 12];

// Utilize array destructuring para produzir o resultado esperado pelo console.log acima
const [n1, n2, n3, n4, n5, n6, n7] = numerosPares;
console.log(n4, n5, n6, n7);

/*Default Destructuring exer*/
// Do jeito que está, quando person é passado para a função getNationality, o retorno é João is undefined.
// Ajuste a função getNationality para que a chamada getNationality(person) retorne João is Brazilian.
const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};

const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
/* Object property shorthand */
// Agora é hora de praticar: altere a função getPosition utilizando a property shorthand.
// const getPosition = (latitude, longitude) => ({
//   latitude: latitude,
//   longitude: longitude,
// });

const getPosition = (latitude, longitude) => ({
  latitude,
  longitude,
});

console.log(getPosition(-19.8157, -43.9542));

/* default parameter */
// Para praticar, escreva uma função multiply que multiplique dois números passados como argumentos.
// Atribua como default o valor 1, caso não seja passado nenhum valor como segundo parâmetro.
const multiply = (number, value = 1) => number * value;

console.log(multiply(8));