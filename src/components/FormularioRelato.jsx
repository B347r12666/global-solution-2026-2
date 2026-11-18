/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useState } from "react";
import { buscar } from "../api/endpoints/linhas";
import { criarRelato } from "../api/endpoints/relatos";

function FormularioRelato({ onSave }) {
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

  const [campoAtivo, setCampoAtivo] = useState(false);
  const [linha, setLinha] = useState("");
  const [linhaSelecionada, setLinhaSelecionada] = useState(null);
  const [carregando, setCarregando] = useState(false);
  const [sugestoes, setSugestoes] = useState([]);

  useEffect(() => {
    if (!campoAtivo || linha.trim().length < 2) {
      setSugestoes([]);
      setCarregando(false);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setCarregando(true);

        const res = await buscar(linha.trim(), 5);

        const linhas = res.data.filter((item) => item.categoria === "linha");

        setSugestoes(linhas);
      } catch (err) {
        console.error("Erro ao buscar sugestões:", err);
        setSugestoes([]);
      } finally {
        setCarregando(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [linha, campoAtivo]);

  const selecionarSugestao = (item) => {
    setLinha(item.nome);
    setLinhaSelecionada(item);

    setCampoAtivo(false);
  };

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

  const enviarRelato = async (e) => {
    e.preventDefault();

    try {
      const res = await criarRelato(
        linhaSelecionada.tipo,
        linhaSelecionada.id,
        avaliacoes,
        comentario,
      );

      onSave(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <form
        onSubmit={enviarRelato}
        className="flex flex-col gap-6 bg-cinza-escuro text-white rounded-2xl p-5 w-full max-w-300 mx-auto"
      >
        <h2 className="text-lg font-bold text-titulo">Avalie esta viagem</h2>

        <div className="relative mb-4">
          <label className="block text-sm mb-2">Linha</label>

          <input
            type="text"
            value={linha}
            onChange={(e) => {
              setLinha(e.target.value);
              setLinhaSelecionada(null);
            }}
            onFocus={() => setCampoAtivo(true)}
            placeholder="Digite a linha da viagem"
            className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio"
          />

          {campoAtivo && (
            <div className="absolute z-20 w-full mt-2 bg-fundo-input text-texto-input rounded-xl shadow-lg overflow-hidden">
              {carregando ? (
                <p>Buscando...</p>
              ) : sugestoes.length > 0 ? (
                sugestoes.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => selecionarSugestao(item)}
                    className="w-full text-left p-3 hover:bg-fundo-input-hover border-b border-cinza-claro"
                  >
                    <span className="block font-medium">{item.nome}</span>
                    <span className="text-sm text-cinza-escuro">
                      {item.tipo}
                    </span>
                  </button>
                ))
              ) : linha.trim().length >= 2 ? (
                <p>Nenhum resultado encontrado.</p>
              ) : (
                <p className="p-3 text-sm">Digite pelo menos 2 caracteres.</p>
              )}
            </div>
          )}
        </div>

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
