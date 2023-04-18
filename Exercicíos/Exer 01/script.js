let nome = prompt('Qual o seu primeiro nome?');
let sobrenome = prompt('Qual o seu sobrenome?');
let areaDeEstudo = prompt('Qual o seu campo de estudo?');
let anoNascimento = parseInt(prompt('Em que ano você nasceu?'));

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

let idade = anoAtual - anoNascimento;

console.log(`Nome completo: ${nome} ${sobrenome}.`);
console.log(`Campo de estudo: ${areaDeEstudo}.`);
console.log(`Idade: ${idade} anos.`);