import { useState } from "react";

function FormularioRelato() {
  const [avaliacoes, setAvaliacoes] = useState({
    conservacao: 0,
    atendimento: 0,
    seguranca: 0,
    limpeza: 0,
    arCondicionado: 0,
    acessibilidade: 0,
    equipe: 0,
  });

  const [comentario, setComentario] = useState("");

  const avaliar = (campo, nota) => {
    setAvaliacoes({
      ...avaliacoes,
      [campo]: nota,
    });
  };

  const renderEstrelas = (campo) => (
    <div className="flex gap-1 shrink-0">
      {[1, 2, 3, 4, 5].map((nota) => (
        <i
          key={nota}
          onClick={() => avaliar(campo, nota)}
          className={`fa-solid fa-star cursor-pointer transition-colors ${
            nota <= avaliacoes[campo] ? "text-yellow-400" : "text-cinza-medio"
          }`}
        ></i>
      ))}
    </div>
  );

  const enviarRelato = (e) => {
    e.preventDefault();

    console.log({
      avaliacoes,
      comentario,
    });

    alert("Relato enviado com sucesso!");
  };

  return (
    <>
      <form
        onSubmit={enviarRelato}
        className="flex flex-col gap-6 bg-cinza-escuro text-white rounded-2xl p-5 w-full max-w-300 mx-auto"
      >
        <h2 className="text-lg font-bold text-titulo">Avalie esta viagem</h2>

        <div className="flex flex-col gap-4">
          {[
            ["Conservação", "conservacao"],
            ["Atendimento", "atendimento"],
            ["Segurança", "seguranca"],
          ].map(([nome, campo]) => (
            <div
              key={campo}
              className="flex items-center justify-between gap-3"
            >
              <span className="text-sm text-cinza-medio">{nome}</span>
              {renderEstrelas(campo)}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-semibold text-titulo">Condições observadas</h3>

          {[
            ["Limpeza do veículo", "limpeza"],
            ["Ar-condicionado", "arCondicionado"],
            ["Acessibilidade", "acessibilidade"],
            ["Atendimento da equipe", "equipe"],
          ].map(([nome, campo]) => (
            <div
              key={campo}
              className="flex items-center justify-between gap-3"
            >
              <span className="text-sm text-cinza-medio">{nome}</span>
              {renderEstrelas(campo)}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-semibold text-titulo">Comentário</label>

          <textarea
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            placeholder="Conte o que aconteceu (sem dados pessoais)..."
            rows="4"
            className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-vermelho-escuro hover:bg-sombra-vermelho rounded-xl p-3 font-bold transition duration-700"
        >
          Enviar relato
        </button>
      </form>
    </>
  );
}

export default FormularioRelato;
