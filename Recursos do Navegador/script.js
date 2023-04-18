/* Primeiro Recurso - CONSOLE */
let nome = 'Cassia';

console.log(nome);
console.error('Deu algum problema');
console.warn('Alguma coisa não está certa');

/* Segundo Recurso - WINDOW */
/* Não é necessário usar a palavra window, ele está sempre disponível */
window.alert('Opa');
let sobrenome = window.prompt('Qual seu sobrenome?');
console.log(sobrenome);
let confirma = window.confirm('Confirma essa ação?');
console.log(confirma);

/* Terceiro Recurso - DOCUMENT */
/* É um objeto e faz referencia a página HTML */