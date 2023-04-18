let nome = prompt('Qual o seu primeiro nome?');
let sobrenome = prompt('Qual o seu sobrenome?');
let areaDeEstudo = prompt('Qual o seu campo de estudo?');
let anoNascimento = parseInt(prompt('Em que ano você nasceu?'));

let dataAtual = new Date();
let anoAtual = dataAtual.getFullYear();

let idade = anoAtual - anoNascimento;

alert(
  'Recruta cadastrado com sucesso!\n' +
  `\nNome completo: ${nome} ${sobrenome}.` +
  `\nCampo de estudo: ${areaDeEstudo}.` +
  `\nIdade: ${idade} anos.`
)