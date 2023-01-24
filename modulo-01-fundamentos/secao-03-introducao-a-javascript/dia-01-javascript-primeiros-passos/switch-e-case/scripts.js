// Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 
// 'aprovada', 'lista' ou 'reprovada';
let processoStatus = 'lista';
// Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
switch (processoStatus) {
  // Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
  case 'aprovada': 
    console.log('Parabéns, você foi aprovada(o)!');
    break;

  // Caso 'lista', imprima “Você está na nossa lista de espera”.
  case 'lista':
    console.log('Você está na nossa lista de espera');
    break;

  // Caso 'reprovada', imprima “Você foi reprovada(o)”.
  case 'reprovada':
    console.log('Você foi reprovada(o)');
    break;

  // Caso default, imprima a mensagem de “Informação incorreta”.
  default:
    console.log('Informação incorreta');
}






