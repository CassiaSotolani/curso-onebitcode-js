let nomeVeiculo1 = prompt('Informe o nome do 1º veículo:');
let velocidadeVeiculo1 = parseInt(prompt('Informe a velocidade do 1º veículo:'));

let nomeVeiculo2 = prompt('Informe o nome do 2º veículo:');
let velocidadeVeiculo2 = parseInt(prompt('Informe a velocidade do 2º veículo:'));

if(velocidadeVeiculo1 > velocidadeVeiculo2) {
  alert(
    `Teste de Velocidade\n` +
    `\nVeículo mais rápido: ${nomeVeiculo1}`
  );
} else if(velocidadeVeiculo2 > velocidadeVeiculo1) {
  alert(
    `Teste de Velocidade\n` +
    `\nVeículo mais rápido: ${nomeVeiculo2}`
  );
} else {
  alert(
    `Teste de Velocidade\n` +
    `\nVelocidades iguais!`
  );
}