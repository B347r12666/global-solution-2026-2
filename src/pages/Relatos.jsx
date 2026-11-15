import FormularioRelato from '../components/FormularioRelato'
import ComentarioCard from '../components/ComentarioCard'

function Relatos() {
  return (
    <>
      <div className="flex flex-col gap-5 pb-10">

        <section className="flex flex-col gap-2 pt-5 lg:pt-10">
          <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20 lg:w-90 w-65">
            Relatos e avaliações
          </h2>

          <p className="text-sm text-cinza-medio pl-2 pb-3 lg:my-2 lg:ml-20 lg:w-90 w-65">
            Compartilhe sua experiência e ajude outras pessoas a terem viagens melhores.
          </p>
        </section>

        <FormularioRelato />

        <section className="flex flex-col gap-4 mt-8">
          <h2 className="text-lg font-bold text-titulo lg:ml-20">
            Relatos da comunidade
          </h2>

          <div className="flex flex-col gap-4 lg:mx-20">
            <ComentarioCard
              transporte="Metrô"
              linha="Linha 3 - Vermelha"
              data="15/11/2026"
              nota={4}
              comentario="Veículo limpo e viagem tranquila, mas o ar-condicionado estava fraco."
            />
          </div>
        </section>

      </div>

    </>
  )
}

export default Relatos
