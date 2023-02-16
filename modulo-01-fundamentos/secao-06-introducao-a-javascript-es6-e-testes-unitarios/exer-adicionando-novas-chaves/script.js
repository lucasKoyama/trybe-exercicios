// Agora que você viu diferentes formas de associar chaves e valores a um objeto, que tal praticar?
// Adicione suas informações ao objeto pessoaEstudante = {}, como nome, email, telefone, github e linkedIn,
// usando os métodos aprendidos neste conteúdo.
pessoaEstudante = {}
const arrKeys = ['nome', 'email', 'telefone', 'github', 'linkedIn'];
const arrValues = ['Lucas Koyama', 'Lucaskoyamahhh@gmail.com', '(19) 99540-5067', 'https://github.com/lucasKoyama', 'https://www.linkedin.com/in/lucas-koyama/'];

for (let i = 0; i < arrKeys.length; i += 1) {
  pessoaEstudante[arrKeys[i]] = arrValues[i];
}

console.log(pessoaEstudante);
