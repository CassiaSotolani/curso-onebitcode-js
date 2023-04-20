let nomeFruta = prompt('Informe o nome de uma fruta:');

switch(nomeFruta) {
  case 'Maça':
    console.log('Não vendemos essa fruta aqui.');
    break;
  case 'Kiwi':
    console.log('Estamos com escassez de kiwis');
    break;
  case 'Melancia':
    console.log('Aqui está, são R$ 3,00/kg');
    break;
  default:
    console.log('Erro! Fruta não encontrada.');
}