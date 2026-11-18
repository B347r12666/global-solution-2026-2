import { useNavigate } from "react-router-dom";
import BuscaTrajeto from "../components/BuscaTrajeto";
import LinhaCard from "../components/LinhaCard";
import AvisoCard from "../components/AvisoCard";
import { useEffect, useState } from "react";
import { listarLinhas } from "../api/endpoints/linhas";
import { listarAvisos } from "../api/endpoints/avisos";

function Home() {
  const navigate = useNavigate();

  const [linhas, setLinhas] = useState([]);
  const [avisos, setAvisos] = useState([]);

  useEffect(() => {
    const buscarLinhas = async () => {
      try {
        const res = await listarLinhas("Todos", "", 4, 0);

        setLinhas(res.data);
      } catch (err) {
        console.error(err);
        setLinhas([]);
      }
    };

    const buscarAvisos = async () => {
      try {
        const res = await listarAvisos(2);

        setAvisos(res.data);
      } catch (err) {
        console.error(err);
        setAvisos([]);
      }
    };

    buscarLinhas();
    buscarAvisos();
  }, []);

  return (
    <>
      <div className="flex flex-col gap-9">
        <div className="pt-8">
          <BuscaTrajeto />
        </div>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between pt-10">
            <div>
              <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20 ">
                Linhas em destaque
              </h2>

              <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20">
                Acompanhe a situação das linhas.
              </p>
            </div>

            <button
              onClick={() => navigate("/linhas")}
              className="text-vermelho-medio font-bold text-sm hover:underline flex items-center gap-0.5 lg:mr-25 mr-3"
            >
              Ver todas
              <i className="fa-solid fa-chevron-right text-[9px]"></i>
            </button>
          </div>

          {linhas.map((linha) => (
            <LinhaCard key={linha.numero} {...linha} />
          ))}
        </section>

        <section className="flex flex-col gap-4">
          <div className="flex items-center justify-between pt-">
            <div>
              <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
                Avisos recentes
              </h2>

              <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20">
                Fique por dentro das atualizações.
              </p>
            </div>

            <button
              onClick={() => navigate("/avisos")}
              className="text-vermelho-medio font-bold text-sm hover:underline flex items-center gap-0.5 lg:mr-25 mr-3"
            >
              Ver todos
              <i className="fa-solid fa-chevron-right text-[9px]"></i>
            </button>
          </div>

          {avisos.map((aviso, index) => (
            <AvisoCard key={index} {...aviso} />
          ))}
        </section>
      </div>
    </>
  );
}

export default Home;
