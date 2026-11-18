import { useEffect, useState } from "react";
import LinhaCard from "../components/LinhaCard";
import { listarLinhas } from "../api/endpoints/linhas";

function Linhas() {
  const filtros = ["Todos", "Metrô", "Trem", "Ônibus"];

  const [filtro, setFiltro] = useState("Todos");
  const [busca, setBusca] = useState("");
  const [buscaDebounced, setBuscaDebounced] = useState("");

  const LIMITE = 20;

  const [pagina, setPagina] = useState(1);
  const [linhas, setLinhas] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const [temProximaPagina, setTemProximaPagina] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setBuscaDebounced(busca.trim());
    }, 400);

    return () => clearTimeout(timeout);
  }, [busca]);

  useEffect(() => {
    let ativo = true;

    const buscarLinhas = async () => {
      try {
        setCarregando(true);
        setErro("");

        const pular = (pagina - 1) * LIMITE;

        const resultado = await listarLinhas(
          filtro,
          buscaDebounced.trim(),
          LIMITE + 1,
          pular,
        );

        if (!ativo) return;

        setTemProximaPagina(resultado.data.length > LIMITE);

        setLinhas(resultado.data.slice(0, LIMITE));
      } catch (err) {
        if (!ativo) return;

        console.error("Erro ao buscar linhas:", err);

        setErro("Não foi possível carregar as linhas.");
        setLinhas([]);
        setTemProximaPagina(false);
      } finally {
        if (ativo) setCarregando(false);
      }
    };

    buscarLinhas();

    return () => {
      ativo = false;
    };
  }, [filtro, buscaDebounced, pagina]);

  const alterarFiltro = (novoFiltro) => {
    setFiltro(novoFiltro);
    setPagina(1);
  };

  const alterarBusca = (valor) => {
    setBusca(valor);
    setPagina(1);
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <section className="flex flex-col pb-5 lg:w-90 w-65">
          <div className="flex items-center justify-between pt-5 lg:pt-10">
            <div>
              <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
                Linhas e transportes
              </h2>

              <p className="text-sm text-cinza-medio pl-2 lg:my-2 lg:ml-20">
                Explore as linhas de metrô, trens e ônibus de São Paulo e
                consulte informações sobre a operação.
              </p>
            </div>
          </div>
        </section>

        <div className="relative w-full max-w-5xl mx-auto px-3 lg:px-6">
          <div className="flex items-center gap-3 bg-fundo-input rounded-xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-vermelho-medio">
            <i className="fa-solid fa-magnifying-glass text-cinza-medio"></i>

            <input
              type="text"
              value={busca}
              onChange={(e) => alterarBusca(e.target.value)}
              placeholder="Buscar linha, estação ou terminal"
              className="w-full min-w-0 bg-transparent text-texto-input outline-none placeholder:text-cinza-medio text-sm"
            />

            {busca && (
              <button
                type="button"
                onClick={() => alterarBusca("")}
                className="shrink-0 text-cinza-medio hover:text-vermelho-medio"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            )}
          </div>
        </div>

        <section>
          <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
            Filtrar transportes
          </h3>

          <div className="flex flex-nowrap gap-2 overflow-x-auto justify-center">
            {filtros.map((item) => (
              <button
                key={item}
                onClick={() => alterarFiltro(item)}
                className={`px-4 py-0.5 mt-2 rounded-4xl text-sm lg:text-sm font-semibold transition-all
                ${
                  filtro === item
                    ? "bg-vermelho-escuro text-white"
                    : "bg-cinza-escuro text-cinza-medio hover:bg-sombra-vermelho"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-3 w-full max-w-5xl mx-auto px-3 lg:px-6">
          {carregando ? (
            <p className="text-center text-cinza-medio py-8">
              Carregando linhas...
            </p>
          ) : erro ? (
            <p className="text-center text-red-500 py-8">{erro}</p>
          ) : linhas.length > 0 ? (
            linhas.map((linha) => (
              <LinhaCard key={`${linha.tipo}-${linha.numero}`} {...linha} />
            ))
          ) : (
            <p className="text-center text-cinza-medio italic py-8">
              Nenhuma linha encontrada.
            </p>
          )}
        </section>

        {!carregando && !erro && (
          <div className="flex items-center justify-center gap-4 pb-8">
            <button
              disabled={pagina === 1}
              onClick={() => setPagina((atual) => atual - 1)}
              className="px-4 py-2 rounded-lg bg-cinza-escuro text-cinza-medio disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-chevron-left mr-2"></i>
              Anterior
            </button>

            <span className="text-sm text-cinza-medio">Página {pagina}</span>

            <button
              disabled={!temProximaPagina}
              onClick={() => setPagina((atual) => atual + 1)}
              className="px-4 py-2 rounded-lg bg-vermelho-escuro text-white disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Próxima
              <i className="fa-solid fa-chevron-right ml-2"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Linhas;
