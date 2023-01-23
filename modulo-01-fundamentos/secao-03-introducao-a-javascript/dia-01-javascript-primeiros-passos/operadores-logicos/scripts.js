// Exercício operador && - AND
// Crie uma constante chamada “currentHour”, que receba um número entre 4 e 24 de sua escolha, para representar as horas do dia.
const currentHour = 6;
// Crie uma variável chamada “message” que, inicialmente, é uma string vazia.
let message = '';
// Implemente condicionais para que:

if (currentHour >= 22) { // Se o horário for maior ou igual a 22, insira “Não deveríamos comer nada, é hora de dormir” na variável “message”.
  message = 'Não deveríamos comer nada, é hora de dormir';
} else if (currentHour >= 18 && currentHour < 22) { // Se o horário for maior ou igual a 18 e menor que 22, insira “Rango da noite, vamos jantar :D” na variável “message”.
  message = 'Rango da noite, vamos jantar :D';
} else if (currentHour >= 14 && currentHour < 18) { // Se o horário for maior ou igual a 14 e menor que 18, insira “Vamos fazer um bolo pro café da tarde?” na variável “message”.
  message = 'Vamos fazer um bolo pro café da tarde?';
} else if (currentHour >= 11 && currentHour < 14) { // Se o horário for maior ou igual a 11 e menor que 14, insira “Hora do almoço!!!” na variável “message”.
  message = 'Hora do almoço!!!';
} else if (currentHour >= 4 && currentHour < 11) { // Se o horário estiver entre 4 e 11, insira “Hmmm, cheiro de café recém-passado” na variável “message”.
  message = 'Hmmm, cheiro de café recém-passado';
}
// Agora imprima a variável message fora das suas condições.
// console.log(message);

// Exercício operador || - OR
// Crie uma variável chamada “weekDay” que receba a string “quarta-feira”.
let weekDay = 'quarta-feira';
// Utilizando if/else, implemente condicionais para que:
// Se nossa variável “weekDay” for “segunda-feira”, “terça-feira”, “quarta-feira”, “quinta-feira” ou “sexta-feira”, imprima “Oba, mais um dia de aprendizado na Trybe >:D”.
if (weekDay === 'segunda-feira' ||
    weekDay === 'terça-feira' ||
    weekDay === 'quarta-feira' ||
    weekDay === 'quinta-feira' ||
    weekDay === 'sexta-feira') {
  console.log('Oba, mais um dia de aprendizado na Trybe >:D');
} else if (weekDay === 'sábado' || weekDay === 'domingo') { // Se for algum dia de fim de semana, imprima “FINALMENTE, descanso merecido UwU”.
  console.log('FINALMENTE, descanso merecido UwU');
}
