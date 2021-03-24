const pessoa = {
  nome: "Maria",
  idade: 7,
  endereco: { logradouro: "Rua Teixeira", numero: 100 },
};
const { nome, idade, endereco } = pessoa;

console.log(nome, idade);

const { logradouro } = endereco;

console.log(endereco);
