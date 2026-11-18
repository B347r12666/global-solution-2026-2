import FormularioRelato from "../components/FormularioRelato";
import ComentarioCard from "../components/ComentarioCard";
import { useAuth } from "../auth/AuthContext";
import { useEffect, useState } from "react";
import { listarRelatos } from "../api/endpoints/relatos";

function Relatos() {
  const { isAuthenticated } = useAuth();

  const [relatos, setRelatos] = useState([]);
  const [carregando, setCarregando] = useState(false);
  const [erro, setErro] = useState("");

  useEffect(() => {
    const buscarRelatos = async () => {
      try {
        setCarregando(true);
        setErro("");

        const res = await listarRelatos();

        setRelatos(res.data);
      } catch (err) {
        console.error(err);
        setErro("Erro ao buscar relatos");
      } finally {
        setCarregando(false);
      }
    };

    buscarRelatos();
  }, []);

  const salvarRelato = (novoRelato) => {
    setRelatos([novoRelato, ...relatos]);
  };

  return (
    <>
      <div className="flex flex-col gap-5 pb-10">
        <section className="flex flex-col gap-2 pt-5 lg:pt-10">
          <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20 lg:w-90 w-65">
            Relatos e avaliações
          </h2>

          <p className="text-sm text-cinza-medio pl-2 pb-3 lg:my-2 lg:ml-20 lg:w-90 w-65">
            Compartilhe sua experiência e ajude outras pessoas a terem viagens
            melhores.
          </p>
        </section>

        {isAuthenticated ? (
          <FormularioRelato onSave={salvarRelato} />
        ) : (
          <p className="text-center text-cinza-medio py-8">
            Crie uma conta para contar o seu relato
          </p>
        )}

        <section className="flex flex-col gap-4 mt-8">
          <h2 className="text-lg font-bold text-titulo lg:ml-20">
            Relatos da comunidade
          </h2>

          <div className="flex flex-col gap-4 lg:mx-20">
            {carregando ? (
              <p className="text-center text-cinza-medio py-8">
                Carregando avisos...
              </p>
            ) : erro ? (
              <p className="text-center text-red-500 py-8">{erro}</p>
            ) : (
              relatos.map((relato) => (
                <ComentarioCard key={relato.id} {...relato} />
              ))
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default Relatos;
