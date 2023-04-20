let opcoes = "";

do {
  opcoes = prompt(
    "Informe a opção desejada:\n" +
      "\nDigite 1 para Opção 01\n" +
      "Digite 2 para Opção 02\n" +
      "Digite 3 para Opção 03\n" +
      "Digite 4 para Opção 04\n" +
      "Digite 5 para Encerrar o programa\n"
  );

  switch (opcoes) {
    case "1":
      alert(`Opção ${opcoes} escolhida`);
      break;
    case "2":
      alert(`Opção ${opcoes} escolhida`);
      break;
    case "3":
      alert(`Opção ${opcoes} escolhida`);
      break;
    case "4":
      alert(`Opção ${opcoes} escolhida`);
      break;
    case "5":
      alert("Programa sendo encerrado. Obrigada!");
      break;
    default:
      alert("Opção inválida.");
  }
} while (opcoes !== "5");
