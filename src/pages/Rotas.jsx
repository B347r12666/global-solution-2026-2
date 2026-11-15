
import EtapasViagem from '../components/EtapasViagem'
import Mapa from '../components/Mapa.jsx'

function Rotas() {

  const etapas = [
    {
      id: 1,
      tipo: 'Origem',
      local: 'Corinthians-Itaquera',
      descricao: 'Início da viagem',
      tempo: '09:00',
    },
    {
      id: 2,
      tipo: 'Metrô',
      local: 'Estação Sé',
      descricao: 'Linha 3 - Vermelha',
      tempo: '25 min',
      icone: 'fa-train-subway'
    },
    {
      id: 3,
      tipo: 'Destino',
      local: 'Estação Sé',
      descricao: 'Chegada ao destino',
      tempo: '09:35',
    }
  ]

  return (
    <>
      <div className="flex items-center justify-between pt-5 lg:pt-10">
        <div>
          <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
            Planeje sua rota
          </h2>

          <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20 lg:w-90 w-65">
            Encontre o melhor caminho até seu destino e acompanhe cada etapa da viagem com mais praticidade e segurança.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-5 lg:my-2 lg:ml-20">
        <Mapa
          origem={etapas[0].local}
          destino={etapas[etapas.length - 1].local}
        />

        <EtapasViagem etapas={etapas} />
      </div>
    </>


  )
}

export default Rotas
