/* Tipos NÂO PRIMITIVOS */

/* Objetos */
/* Conjunto de várias informações, armazena vários valores diferentes */
let pessoa = {
  nome: 'Cassia',
  sobrenome: 'Sotolani',
  idade: 31,
  cidade: 'Dourados',
  uf: 'MS',
  maiorIdade: true
}

/* Funções */
/* Procedimento a ser executado */
function mostraNome(nome) {
  return `O nome é ${nome}`
}
console.log(mostraNome('Cassia'));