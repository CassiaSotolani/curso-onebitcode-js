const nome = prompt("Informe seu nome:");
let nomeDasCidadesVisitadas = "";
let quantCidadeVisitadas = 0;

let visitouAlgumaCidade = prompt(
  "Você já visitou alguma cidade?\n" +
    "\nDigite 1 para SIM\n" +
    "Digite 2 para NÂO"
);

while (visitouAlgumaCidade === "1") {
  let nomeDaCidadeVisitada = prompt("Qual o nome da cidade que vc visitou?");
  nomeDasCidadesVisitadas += `- ${nomeDaCidadeVisitada}\n`;
  quantCidadeVisitadas++;
  visitouAlgumaCidade = prompt(
    "Você já visitou alguma cidade?\n" +
      "\nDigite 1 para SIM\n" +
      "Digite 2 para NÂO"
  );
}

alert(
  `Nome do turista: ${nome}\n` +
    `Quantas cidades visitadas: ${quantCidadeVisitadas}\n` +
    `Quais foram as cidades visitadas:\n${nomeDasCidadesVisitadas}`
);
