const clientes = $input.all();

return clientes.map((item) => {
  const cliente = item.json;

  const nome = cliente.nome || "Cliente";
  const perfil = String(cliente.perfil || "").trim().toLowerCase();

  let mensagemPerfil;

  if (perfil.includes("conservador")) {
    mensagemPerfil =
      "Ao avaliar investimentos, observe a segurança, a liquidez, os custos e os riscos envolvidos.";
  } else if (perfil.includes("moderado")) {
    mensagemPerfil =
      "Ao estudar alternativas de investimento, considere o equilíbrio entre risco, diversificação e prazo dos objetivos.";
  } else if (
    perfil.includes("arrojado") ||
    perfil.includes("agressivo")
  ) {
    mensagemPerfil =
      "Ao estudar investimentos, avalie a volatilidade, as possíveis perdas e a diversificação de acordo com seus objetivos.";
  } else {
    mensagemPerfil =
      "Antes de tomar decisões financeiras, avalie seus objetivos, seu prazo, sua tolerância a riscos e a liquidez necessária.";
  }

  const mensagem =
    `Olá, ${nome}! ` +
    `Preparamos uma mensagem educativa considerando seu perfil de investidor (${cliente.perfil || "não informado"}). ` +
    `${mensagemPerfil} ` +
    "Este conteúdo é informativo e não constitui recomendação de investimento.";

  return {
    json: {
      ...cliente,
      mensagem,
      tipo_geracao: "simulacao_por_regras"
    }
  };
});
