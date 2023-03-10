const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.
const addNight = (objeto, chave, valor) => {
  objeto[chave] = valor
};
addNight(lesson2, 'turno', 'noite');
// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKeys = (objeto) => { return Object.keys(objeto) };
// Crie uma função para mostrar o tamanho de um objeto.
const objLength = (objeto) => { return Object.keys(objeto).length };
// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const objValues = (objeto) => { return Object.values(objeto) };
// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign.
// Cada chave desse novo objeto será uma aula, sendo essas chaves lesson1, lesson2 e lesson3.
// Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });

// Usando o objeto criado no tópico anterior, crie uma função que retorne o número total de estudantes em todas as aulas.
const totalStudent = () => {
  const objLen = objLength(allLessons);
  let total = 0;
  for (let i = 0; i < objLen; i += 1) {
    total += Object.values(allLessons)[i].numeroEstudantes;
  }
  return total
};
console.log(totalStudent());
// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.
const getValueByNumber = (obj, index) => { return Object.values(obj)[index] };
// console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros,
// sendo eles o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
  let verification = false;
  const objArr = Object.entries(obj);
  for (let i = 0; i < objArr.length; i += 1) {
    if (objArr[i][0] === key && objArr[i][1] === value) {
      verification = true;
    }
  }
  return verification
};
