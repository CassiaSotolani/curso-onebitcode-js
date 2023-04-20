let nomePersonagemAtaque = prompt('Informe o nome do personagem de ataque');
let poderDeAtaque = parseInt(prompt('Informe a força do poder de ataque do personagem'));

let nomePersonagemDefesa = prompt('Informe o nome do personagem de defesa');
let pontosDeVida = parseInt(prompt('Informe a quantidade de pontos de vida do personagem'));
let poderDeDefesa = parseInt(prompt('Informe a quantidade do poder de defesa do personagem'));
let possuiEscudo = prompt('Personagem de defesa possui escudo? (S/N)');

let danoCausado = 0;

if((poderDeAtaque > poderDeDefesa) && (possuiEscudo === 'N')) {
  danoCausado = poderDeAtaque - poderDeDefesa;
} else if((poderDeAtaque > poderDeDefesa) && (possuiEscudo === 'S')) {
  danoCausado = (poderDeAtaque - poderDeDefesa) / 2;
}

pontosDeVida -= danoCausado;

alert(
  `BATALHA ENTRE 2 JOGADORES\n`+
  `\nQuantidade de dano: ${danoCausado}`
);

alert(
  `\nPersonagem de Ataque\n` +
  `Nome: ${nomePersonagemAtaque}\n` +
  `Poder de ataque: ${poderDeAtaque}\n` +
  `\nPersonagem de Defesa\n` +
  `Nome: ${nomePersonagemDefesa}\n` +
  `Pontos de vida: ${pontosDeVida}\n` +
  `Poder de defesa: ${poderDeDefesa}\n` +
  `Possui escudo: ${possuiEscudo}`
);