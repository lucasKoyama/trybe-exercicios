// Crie duas funções JavaScript com as seguintes especificações:
  // Função 1: Escreva uma função que substitua a letra ‘x’ em uma frase.
    // 1 - O nome da função deverá ser substituaX;
    // 2 - A função deverá receber um nome por parâmetro;
    // 3 - Declare dentro da função uma variável do tipo const, com o nome frase, atribuindo o valor 'Tryber x aqui!';
    // 4 - A função deverá retornar uma nova frase em que o x da frase 'Tryber x aqui!' seja substituído pelo nome passado por parâmetro.
const substituaX = nome => {
  const frase = `Tryber x aqui!`;
  const fraseX =  frase.split(' ');
  let novaFrase = '';
  for (let word of fraseX) {
    word === 'x' ? novaFrase += `${nome} `: novaFrase += `${word} `; 
  }
  return novaFrase;
}

// Função 2: Escreva uma função que irá receber o retorno da Função 1 por parâmetro e retornará uma nova string.
  // O nome da função deverá ser minhasSkills;
  // A função deverá receber o retorno da Função 1 - substituaX por parâmetro;
  // Declare dentro da função uma variável com o nome skills, do tipo const;
  // A variável skills deverá ser um array contendo três strings com tecnologias que você já aprendeu.
  // Crie uma varável do tipo let e concatene o valor retornado da Função 1 - substituaX (utilize template literals), a frase:
  //  'Minhas três principais habilidades são:' e o valor da variável skills.
const minhasSkills = func => {
  const skills = ['JavaScript', 'HTML', 'CSS'];
  let msg = `
  ${func}
  
  Minhas três principais habilidades são:
  `;
  for (let skill of skills) {
    msg += skill + '\n  ';
  }
  return msg;
}

console.log(minhasSkills(substituaX('Lucas')));
