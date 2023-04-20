let valorEmMetros = parseInt(prompt('Informe o valor em metros(m)'));
let opcaoDeMedida = parseInt(prompt(
  'Opções para converter\n' +
  '1 - milímetro(mm)\n' +
  '2 - centímetro(cm)\n' +
  '3 - decímetro(dm)\n' +
  '4 - decâmetro(dam)\n' +
  '5 - hectômetro(hm)\n' +
  '6 - quilômetro(mm)\n'
  )
);

switch(opcaoDeMedida) {
  case 1:
    alert(`Resultado: ${valorEmMetros}m = ${valorEmMetros *= 1000}mm`);
    break;
  case 2:
    alert(`Resultado: ${valorEmMetros}m = ${valorEmMetros *= 100}cm`);
    break;
  case 3:
    alert(`Resultado: ${valorEmMetros}m = ${valorEmMetros *= 10}dm`);
    break;
  case 4:
    alert(`Resultado: ${valorEmMetros}m = ${valorEmMetros /= 10}dam`);
    break;
  case 5:
    alert(`Resultado: ${valorEmMetros}m = ${valorEmMetros /= 100}hm`);
    break;
  case 6:
    alert(`Resultado: ${valorEmMetros}m = ${valorEmMetros /= 1000}km`);
    break;
  default:
    alert('Opção inválida');
}