let valor1 = parseInt(prompt('Informe o primeiro valor'));
let valor2 = parseInt(prompt('Informe o segundo valor'));

let soma = valor1 + valor2;
let subtracao = valor1 - valor2;
let multiplicacao = valor1 * valor2;
let divisao = valor1 / valor2;

alert(
  'Calculadora de 4 operações\n' +
  `\nValores informados: 1º - ${valor1} | 2º - ${valor2}\n` +
  `\nSoma: ${soma}` +
  `\nSubtração: ${subtracao}` +
  `\nMultiplicação: ${multiplicacao}` +
  `\nDivisão: ${divisao}`
)