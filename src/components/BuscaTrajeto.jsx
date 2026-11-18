/* eslint-disable react-hooks/set-state-in-effect */
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { buscar } from "../api/endpoints/linhas";

function BuscaTrajeto() {
  const navigate = useNavigate();

  const camposRef = useRef(null);

  const [origem, setOrigem] = useState("");
  const [destino, setDestino] = useState("");
  const [origemSelecionada, setOrigemSelecionada] = useState(null);
  const [destinoSelecionado, setDestinoSelecionado] = useState(null);
  const [campoAtivo, setCampoAtivo] = useState("");

  const [sugestoes, setSugestoes] = useState([]);
  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    const valor = campoAtivo === "origem" ? origem : destino;

    if (!campoAtivo || valor.trim().length < 2) {
      setSugestoes([]);
      setCarregando(false);
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        setCarregando(true);

        const res = await buscar(valor.trim(), 5);

        const paradas = res.data.filter((item) => item.categoria === "parada");

        setSugestoes(paradas);
      } catch (err) {
        console.error("Erro ao buscar sugestões:", err);
        setSugestoes([]);
      } finally {
        setCarregando(false);
      }
    }, 400);

    return () => clearTimeout(timeout);
  }, [origem, destino, campoAtivo]);

  useEffect(() => {
    const handleClickFora = (e) => {
      if (camposRef.current && !camposRef.current.contains(e.target)) {
        setCampoAtivo("");
      }
    };

    document.addEventListener("mousedown", handleClickFora);

    return () => {
      document.removeEventListener("mousedown", handleClickFora);
    };
  }, []);

  const selecionarSugestao = (item) => {
    if (campoAtivo === "origem") {
      setOrigem(item.nome);
      setOrigemSelecionada(item);
    } else {
      setDestino(item.nome);
      setDestinoSelecionado(item);
    }

    setCampoAtivo("");
  };

  const buscarTrajeto = () => {
    if (!origem.trim() || !destino.trim()) return;

    navigate("/rotas", {
      state: { origemSelecionada, destinoSelecionado },
    });
  };

  return (
    <>
      <section className="bg-cinza-escuro text-white rounded-2xl p-5 lg:w-250 lg:mt-6 lg:mx-auto">
        <h2 className="text-xl font-bold mb-1 text-titulo">Para onde vamos?</h2>

        <p className="text-sm text-cinza-medio mb-5">
          Encontre o melhor caminho para sua viagem.
        </p>

        <div ref={camposRef}>
          <div className="relative mb-4">
            <label className="block text-sm mb-2">Origem</label>

            <input
              type="text"
              value={origem}
              onChange={(e) => setOrigem(e.target.value)}
              onFocus={() => setCampoAtivo("origem")}
              placeholder="Digite sua localização"
              className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio"
            />

            {campoAtivo === "origem" && (
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
                ) : origem.trim().length >= 2 ? (
                  <p>Nenhum resultado encontrado.</p>
                ) : (
                  <p className="p-3 text-sm">Digite pelo menos 2 caracteres.</p>
                )}
              </div>
            )}
          </div>

          <div className="relative mb-5">
            <label className="block text-sm mb-2">Destino</label>

            <input
              type="text"
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
              onFocus={() => setCampoAtivo("destino")}
              placeholder="Digite seu destino"
              className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio"
            />

            {campoAtivo === "destino" && (
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
                ) : origem.trim().length >= 2 ? (
                  <p>Nenhum resultado encontrado.</p>
                ) : (
                  <p className="p-3 text-sm">Digite pelo menos 2 caracteres.</p>
                )}
              </div>
            )}
          </div>
        </div>

        <button
          type="button"
          onClick={buscarTrajeto}
          disabled={!origem.trim() || !destino.trim()}
          className="w-full bg-vermelho-escuro hover:bg-sombra-vermelho disabled:opacity-40 disabled:cursor-not-allowed rounded-xl p-3 font-bold transition"
        >
          <i className="fa-solid fa-route mr-2"></i>
          Buscar trajeto
        </button>
      </section>
    </>
  );
}

export default BuscaTrajeto;
