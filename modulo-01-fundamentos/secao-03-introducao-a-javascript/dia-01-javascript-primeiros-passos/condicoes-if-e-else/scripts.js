// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100;
const nota = 95;
// Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista
// de espera. Para isso, considere as seguintes informações:

if (nota >= 80) { // Se a nota for maior ou igual a 80, imprima “Parabéns, você faz parte do grupo das pessoas aprovadas!”
  console.log('Parabéns, você faz parte do grupo das pessoas aprovadas!')
} else if (nota < 80 && nota >= 60) { // Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”
  console.log('Você está na nossa lista de espera')
} else { // Se a nota for menor que 60, imprima “Infelizmente, você reprovou.”
  console.log('Infelizmente, você reprovou.')
}
// Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação.
// Altere o valor da nota para verificar se as condições que você implementou funcionam.