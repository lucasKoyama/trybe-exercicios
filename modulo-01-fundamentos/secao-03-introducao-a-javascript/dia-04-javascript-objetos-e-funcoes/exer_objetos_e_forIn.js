/*
// Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  // Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’
  recorrente: 'Sim'
};

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave.
console.log(`Bem-vinda, ${info.personagem}`);

// e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor.
console.log(info['recorrente']);

// Faça um for/in que mostre todas as chaves do objeto.
for (let chave in info) {
  console.log(chave);
}
console.log();

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto.
for (let chave in info) {
  console.log(`${chave}: ${info[chave]}`);
}
console.log();

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’,
// ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada
// objeto juntos, de acordo com cada uma das chaves.
let info2 = {
  personagem: 'Tio Patinhas',
  origem: 'Pato Christmas on Bear Mountain, Dell’s Four Color Comics #178',
  nota: 'O último MacPatinhas’',
  recorrente: 'Sim'
}
for (let chave in info) {
  if (info[chave] === info2[chave]) {
    console.log("Ambos recorrentes // Atenção para essa última linha!")
  } else {
    console.log(`${info[chave]} e ${info2[chave]}`);
  }
}
*/
let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
    // Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
    {
      titulo: 'Harry Potter e o Prisioneiro de Azkaban',
      autor: 'JK Rowling',
      editora: 'Rocco',
    },
  ],
};
// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato:
//  “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”.
console.log(`O livro favorita de ${leitor.nome} ${leitor.sobrenome} se chama ${leitor.livrosFavoritos[0].titulo}`);
// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”,
// onde “<quantidade>” é um número gerado automaticamente pelo seu código.
console.log(`Julia tem ${leitor.livrosFavoritos.length} livros favoritos`);

