
import TarifaCard from '../components/TarifaCard'
import BeneficioCard from '../components/BeneficioCard'
import TabelaTarifas from '../components/TabelaTarifas'
import Calculadora from '../components/Calculadora'

function Tarifas() {
  return (
    <div className="flex flex-col gap-6">

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between pt-5 lg:pt-10">
          <div>
            <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
              Tarifas e benefícios
            </h2>

            <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20 lg:w-90 w-65">
              Consulte os preços do transporte público, compare tarifas
              e descubra os benefícios disponíveis.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
          Tarifas por transporte
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:my-2 lg:mx-20">
          <TarifaCard
            icone="fa-solid fa-bus"
            nome="Ônibus"
            valor="R$ --"
            descricao="Tarifa municipal"
          />

          <TarifaCard
            icone="fa-solid fa-train-subway"
            nome="Metrô"
            valor="R$ --"
            descricao="Tarifa básica"
          />

          <TarifaCard
            icone="fa-solid fa-train"
            nome="Trem"
            valor="R$ --"
            descricao="Tarifa básica"
          />
        </div>
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
          Comparação de tarifas
        </h3>
        <TabelaTarifas />
      </section>

      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
          Calculadora de tarifas
        </h3>

        <div className="lg:mx-20">
          <Calculadora />
        </div>

      </section>


      <section className="flex flex-col gap-4">
        <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
          Benefícios e gratuidades
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:mx-20">

          <BeneficioCard
            icone="fa-solid fa-graduation-cap"
            nome="Estudante"
            descricao="Meia-tarifa ou gratuidade conforme os requisitos."
            valor="Consultar"
            link="https://estudante.sptrans.com.br/"
          />

          <BeneficioCard
            icone="fa-solid fa-briefcase"
            nome="Vale-transporte"
            descricao="Auxílio para deslocamento entre casa e trabalho."
            valor="Consultar"
            link="https://www.sptrans.com.br/perguntas-e-respostas/?sobre=vale-transporte"
          />

          <BeneficioCard
            icone="fa-solid fa-wheelchair"
            nome="Pessoa com deficiência"
            descricao="Gratuidade mediante avaliação e credenciamento."
            valor="Gratuito*"
            link="https://www.sptrans.com.br/perguntas-e-respostas/?sobre=bilhete-pcd"
          />

          <BeneficioCard
            icone="fa-solid fa-person-cane"
            nome="Idosos"
            descricao="Gratuidade conforme idade e regras do sistema."
            valor="Gratuito*"
            link="https://www.emtu.sp.gov.br/emtu/redes-de-transporte/passageiro-idoso.fss"
          />

          <BeneficioCard
            icone="fa-solid fa-ticket"
            nome="Tarifa Zero"
            descricao="Gratuidade aos domingos e em feriados específicos na capital."
            valor="R$ 0,00"
            link="https://www.sptrans.com.br/tarifas/"
          />

        </div>

        <p className="text-xs text-cinza-medio lg:mx-20 italic">
          A gratuidade depende do atendimento aos critérios de cada benefício e da modalidade de transporte.
        </p>
      </section>

    </div >

  )
}

export default Tarifas
