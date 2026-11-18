import { useEffect, useState } from "react";
import AvisoCard from "../components/AvisoCard";
import { listarAvisos } from "../api/endpoints/avisos";

function Avisos() {
  const [filtro, setFiltro] = useState("Todos");

  const [avisos, setAvisos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const buscarAvisos = async () => {
      try {
        setCarregando(true);
        setErro("");

        const res = await listarAvisos();

        setAvisos(res.data);
      } catch (err) {
        console.error(err);
        setErro("Erro ao buscar avisos");
      } finally {
        setCarregando(false);
      }
    };

    buscarAvisos();
  }, []);

  const filtros = ["Todos", "Informativos", "Atenção", "Urgentes"];

  const avisosFiltrados = avisos.filter((aviso) => {
    if (filtro === "Todos") return true;
    if (filtro === "Informativos") return aviso.tipo === "info";
    if (filtro === "Atenção") return aviso.tipo === "alerta";
    if (filtro === "Urgentes") return aviso.tipo === "urgente";

    return true;
  });

  const quantidade = {
    todos: avisos.length,
    informativos: avisos.filter((aviso) => aviso.tipo === "info").length,
    alertas: avisos.filter((aviso) => aviso.tipo === "alerta").length,
    urgentes: avisos.filter((aviso) => aviso.tipo === "urgente").length,
  };

  const quantidadeFiltro = {
    Todos: quantidade.todos,
    Informativos: quantidade.informativos,
    Atenção: quantidade.alertas,
    Urgentes: quantidade.urgentes,
  };

  return (
    <>
      <div className="flex flex-col gap-6">
        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between pt-5 lg:pt-10 lg:w-90 w-65">
            <div>
              <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20 ">
                Central de avisos
              </h2>

              <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20">
                Acompanhe as ocorrências do transporte.
              </p>
            </div>
          </div>
        </section>

        {carregando ? (
          <p className="text-center text-cinza-medio py-8">
            Carregando avisos...
          </p>
        ) : erro ? (
          <p className="text-center text-red-500 py-8">{erro}</p>
        ) : (
          <>
            <section className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
                Filtrar avisos
              </h3>

              <div className="flex flex-nowrap gap-1 overflow-x-auto justify-center">
                {filtros.map((item) => (
                  <button
                    key={item}
                    onClick={() => setFiltro(item)}
                    className={`px-3 py-1 rounded-4xl text-[11.8px] lg:text-sm font-semibold transition-all
                                ${
                                  filtro === item
                                    ? "bg-vermelho-escuro text-white"
                                    : "bg-cinza-escuro text-cinza-medio hover:bg-sombra-vermelho"
                                }`}
                  >
                    {item}{" "}
                    <span className=" italic font-light text-white/50">
                      ({quantidadeFiltro[item]})
                    </span>
                  </button>
                ))}
              </div>
            </section>

            <section className="flex flex-col gap-4 lg:my-2 lg:ml-20">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-titulo">
                  {filtro === "Todos" ? "Avisos recentes" : filtro}
                </h3>
              </div>

              {avisosFiltrados.length > 0 ? (
                avisosFiltrados.map((aviso) => (
                  <div key={aviso.id} className="flex flex-col gap-2">
                    <p className="text-xs lg:text-sm  text-cinza-medio">
                      {aviso.linha}
                    </p>

                    <AvisoCard
                      titulo={aviso.titulo}
                      descricao={aviso.descricao}
                      horario={aviso.horario}
                      data={aviso.data}
                      tipo={aviso.tipo}
                    />
                  </div>
                ))
              ) : (
                <p className="text-center text-cinza-medio  italic py-8">
                  Nenhum aviso encontrado nesta categoria.
                </p>
              )}
            </section>
          </>
        )}
      </div>
    </>
  );
}

export default Avisos;
