let dinheiroDisponivel = parseInt(
  prompt("Qual a quantidade inicial de dinheiro")
);
let opcoes = 0;

do {
  opcoes = parseInt(
    prompt(
      `Quantidade de dinheiro: ${dinheiroDisponivel}\n` +
        `\nDigite 1 - Adicionar dinheiro\n` +
        `Digite 2 - Remover dinheiro\n` +
        `Digite 3 - Sair`
    )
  );

  let adicionarDinheiro = 0;
  let removerDinheiro = 0;

  switch (opcoes) {
    case 1:
      adicionarDinheiro = parseInt(prompt("Qual valor você deseja adicionar?"));
      dinheiroDisponivel += adicionarDinheiro;
      break;
    case 2:
      removerDinheiro = parseInt(prompt("Qual valor você deseja remover?"));
      dinheiroDisponivel -= removerDinheiro;
      break;
  }
} while (opcoes !== 3);
