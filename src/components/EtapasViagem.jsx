import { useState } from "react";
import {
  desfavoritarTrajeto,
  favoritarTrajeto,
} from "../api/endpoints/favoritos";
import { useAuth } from "../auth/AuthContext";

function EtapasViagem({ etapas = [] }) {
  const { isAuthenticated } = useAuth();

  const [curtido, setCurtido] = useState(false);
  const [id, setId] = useState(null);
  const [carregando, setCarregando] = useState(false);

  const favoritar = async () => {
    if (carregando) return;

    try {
      setCarregando(true);

      if (curtido) {
        await desfavoritarTrajeto(id);
        setCurtido(false);
      } else {
        const res = await favoritarTrajeto(
          etapas[0].local,
          etapas[2].local,
          etapas[1].tipo,
          etapas[1].tempo,
        );
        setId(res.data.id);
        setCurtido(true);
      }
    } catch (err) {
      console.error("Erro ao favoritar/desfavoritar: ", err);
    } finally {
      setCarregando(false);
    }
  };

  return (
    <>
      <section className="flex flex-col gap-5 bg-cinza-escuro text-white rounded-2xl p-5">
        {isAuthenticated && (
          <div className="flex items-center justify-between italic">
            <span className="text-sm font-semibold text-titulo">Trajeto</span>

            <i
              onClick={favoritar}
              className={`fa-solid fa-heart cursor-pointer transition-colors ${
                curtido ? "text-vermelho-medio" : "text-cinza-medio"
              }`}
            ></i>
          </div>
        )}

        <div>
          <h2 className="text-lg font-bold text-titulo">Etapas da viagem</h2>

          <p className="text-sm text-cinza-medio">
            Confira o percurso até seu destino.
          </p>
        </div>

        <div className="flex flex-col">
          {etapas.map((etapa, index) => (
            <div key={etapa.id || index} className="flex gap-4">
              {/* Linha do tempo */}
              <div className="flex flex-col items-center">
                <div
                  className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                    index === 0
                      ? "bg-green-600"
                      : index === etapas.length - 1
                        ? "bg-vermelho-escuro"
                        : "bg-cinza-medio"
                  }`}
                >
                  <i
                    className={`fa-solid ${
                      index === 0
                        ? "fa-location-dot"
                        : index === etapas.length - 1
                          ? "fa-flag-checkered"
                          : etapa.icone || "fa-train-subway"
                    }`}
                  ></i>
                </div>

                {index !== etapas.length - 1 && (
                  <div className="w-0.5 flex-1 min-h-12 bg-cinza-medio"></div>
                )}
              </div>

              {/* Informações da etapa */}
              <div className="flex flex-col gap-1 pb-6 min-w-0">
                <span className="text-xs text-cinza-medio">{etapa.tipo}</span>

                <h3 className="font-semibold text-sm text-titulo">
                  {etapa.local}
                </h3>

                {etapa.descricao && (
                  <p className="text-xs text-cinza-medio">{etapa.descricao}</p>
                )}

                {etapa.tempo && (
                  <span className="text-xs text-vermelho-medio font-semibold">
                    <i className="fa-regular fa-clock mr-1"></i>
                    {etapa.tempo}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default EtapasViagem;
