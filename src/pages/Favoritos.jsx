import { useEffect, useState } from "react";
import RotaCard from "../components/RotaCard";
import LinhaCard from "../components/LinhaCard";
import { listarFavoritos } from "../api/endpoints/favoritos";
import { useAuth } from "../auth/AuthContext";

function Favoritos() {
  const {isAuthenticated} = useAuth()

  const [filtro, setFiltro] = useState("Todos");
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  const [linhasFavoritas, setLinhasFavoritas] = useState([]);
  const [trajetosFavoritos, setTrajetosFavoritos] = useState([]);

  useEffect(() => {
    const buscarFavoritos = async () => {
      try {
        setCarregando(true);
        setErro("");

        const res = await listarFavoritos();

        setLinhasFavoritas(res.data.linhas);
        setTrajetosFavoritos(res.data.trajetos);
      } catch (err) {
        console.error(err);
        setErro("Erro ao buscar favoritos");
      } finally {
        setCarregando(false);
      }
    };

    buscarFavoritos();
  }, []);

  const filtros = ["Todos", "Trajetos", "Linhas"];

  return (
    <>
      <div>
        <section className="flex flex-col gap-4 pb-5 lg:w-90 w-65">
          <div className="flex items-center justify-between pt-5 lg:pt-10">
            <div>
              <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
                Seus favoritos
              </h2>

              <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20">
                Acesse rapidamente suas linhas e trajetos salvos para facilitar
                seus deslocamentos.
              </p>
            </div>
          </div>
        </section>

        {!isAuthenticated ? (
          <p className="text-center text-cinza-medio py-8">
            Crie uma conta para favoritar linhas e trajetos
          </p>
        ) : carregando ? (
          <p className="text-center text-cinza-medio py-8">
            Carregando linhas...
          </p>
        ) : erro ? (
          <p className="text-center text-red-500 py-8">{erro}</p>
        ) : (
          <>
            <section className="flex flex-col gap-2 mb-6">
              <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
                Filtrar favoritos
              </h3>

              <div className="flex flex-nowrap gap-2 overflow-x-auto justify-center">
                {filtros.map((item) => (
                  <button
                    key={item}
                    onClick={() => setFiltro(item)}
                    className={`px-4 py-2 rounded-4xl text-[11.8px] lg:text-sm font-semibold transition-all
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

            {(filtro === "Todos" || filtro === "Trajetos") && (
              <section className="flex flex-col gap-4 mb-10">
                <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
                  Seus trajetos
                </h3>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-20">
                  {trajetosFavoritos.map((trajeto) => (
                    <RotaCard
                      key={trajeto.id}
                      id={trajeto.id}
                      origem={trajeto.origem}
                      destino={trajeto.destino}
                      transporte={trajeto.transporte}
                      tempo={trajeto.tempo}
                      favorito={true}
                    />
                  ))}
                </div>
              </section>
            )}

            {(filtro === "Todos" || filtro === "Linhas") && (
              <section className="flex flex-col gap-4">
                <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
                  Suas linhas
                </h3>

                <div className="flex flex-col gap-3">
                  {linhasFavoritas.map((linha) => (
                    <LinhaCard
                      key={linha.id}
                      id={linha.id}
                      numero={linha.numero}
                      nome={linha.nome}
                      cor={linha.cor}
                      status={linha.status}
                      tipo={linha.tipo}
                      operadora={linha.operadora}
                      favorito={true}
                    />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Favoritos;
