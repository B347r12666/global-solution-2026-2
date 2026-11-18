/* eslint-disable react-hooks/set-state-in-effect */
import { useLocation } from "react-router-dom";
import EtapasViagem from "../components/EtapasViagem";
import Mapa from "../components/Mapa.jsx";
import { useEffect, useState } from "react";
import { trajetos } from "../api/endpoints/trajetos.js";
import BuscaTrajeto from "../components/BuscaTrajeto.jsx";
import { shapeLinha } from "../api/endpoints/linhas.js";

function Rotas() {
  const { state } = useLocation();
  const { origemSelecionada, destinoSelecionado } = state || {};

  const [etapas, setEtapas] = useState([]);
  const [shapes, setShapes] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    if (!origemSelecionada || !destinoSelecionado) {
      setEtapas([]);
      return;
    }

    const buscarRotas = async () => {
      try {
        setCarregando(true);
        setErro("");

        const res = await trajetos(
          origemSelecionada.id,
          destinoSelecionado.id,
          5,
        );

        if (!res.data || res.data.length === 0) {
          setEtapas([]);
          return;
        }

        const melhorTrajeto = res.data[0];

        const novasEtapas = [
          {
            id: origemSelecionada.id,
            tipo: "Origem",
            local: origemSelecionada.nome,
            descricao: "Início da viagem",
            coord: origemSelecionada.coord
          },
          {
            id: melhorTrajeto.linha.id,
            tipo: melhorTrajeto.transporte,
            local: melhorTrajeto.linha.numero,
            descricao: melhorTrajeto.linha.nome,
            tempo: melhorTrajeto.tempo,
            cor: melhorTrajeto.linha.cor,
            icone:
              melhorTrajeto.transporte === "Ônibus"
                ? "fa-bus"
                : "fa-train-subway",
          },
          {
            id: destinoSelecionado.id,
            tipo: "Destino",
            local: destinoSelecionado.nome,
            descricao: "Chegada ao destino",
            coord: destinoSelecionado.coord
          },
        ];

        setEtapas(novasEtapas);
      } catch (err) {
        console.error("Erro ao buscar trajetos:", err);
        setErro("Não foi possível buscar os trajetos. Tente novamente.");
        setEtapas([]);
      } finally {
        setCarregando(false);
      }
    };

    buscarRotas();
  }, [origemSelecionada, destinoSelecionado]);

  useEffect(() => {
    if (etapas.length < 2) {
      setShapes([]);
      return;
    }

    const buscarShapes = async () => {
      try {
        setCarregando(true);

        const res = await shapeLinha(etapas[1].id);

        if (!res.data?.pontos || res.data.pontos.length === 0) {
          setShapes([]);
          return;
        }

        setShapes(res.data.pontos);
      } catch (err) {
        console.error("Erro ao buscar shapes:", err);
        setShapes([]);
      } finally {
        setCarregando(false);
      }
    };

    buscarShapes();
  }, [etapas]);

  return (
    <>
      <div className="flex items-center justify-between pt-5 lg:pt-10">
        <div>
          <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
            Planeje sua rota
          </h2>

          <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20 lg:w-90 w-65">
            Encontre o melhor caminho até seu destino e acompanhe cada etapa da
            viagem com mais praticidade e segurança.
          </p>
        </div>
      </div>

      {!origemSelecionada || !destinoSelecionado ? (
        <div className="pt-5">
          <BuscaTrajeto />
        </div>
      ) : (
        <div className="flex flex-col gap-5 pt-5 lg:my-2 lg:ml-20">
          {carregando && (
            <p className="text-cinza-medio">Buscando melhor trajeto...</p>
          )}

          {erro && <p className="text-red-500">{erro}</p>}

          {!carregando && !erro && etapas.length === 0 && (
            <p className="text-cinza-medio">
              Nenhum trajeto direto encontrado entre essas paradas.
            </p>
          )}

          {!carregando && etapas.length > 0 && (
            <>
              <Mapa
                origem={etapas[0]}
                destino={etapas[etapas.length - 1]}
                shapes={shapes}
                cor={etapas[1].cor}
              />

              <EtapasViagem etapas={etapas} />
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Rotas;
