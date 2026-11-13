import { useState } from 'react'
import RotaCard from '../components/RotaCard'
import LinhaCard from '../components/LinhaCard'

function Favoritos() {

  const [filtro, setFiltro] = useState('Todos')

  const filtros = ['Todos', 'Trajetos', 'Linhas']

  const linhasFavoritas = [
    {
      id: 1,
      numero: '1',
      nome: 'Azul',
      cor: '#005CA9',
      status: 'Normal',
      tipo: 'Metrô',
      operadora: 'Metrô de São Paulo'
    },
    {
      id: 2,
      numero: '3',
      nome: 'Vermelha',
      cor: '#EE1B24',
      status: 'Com problemas',
      tipo: 'Metrô',
      operadora: 'Metrô de São Paulo'
    },
    {
      id: 3,
      numero: '11',
      nome: 'Coral',
      cor: '#E56B1F',
      status: 'Normal',
      tipo: 'Trem',
      operadora: 'CPTM'
    },
    {
      id: 4,
      numero: '875A-10',
      nome: 'Lapa - Aeroporto',
      cor: '#287A45',
      status: 'Normal',
      tipo: 'Ônibus',
      operadora: 'SPTrans'
    }
  ]

  const trajetosFavoritos = [
    {
      id: 1,
      origem: 'Corinthians-Itaquera',
      destino: 'Sé',
      transporte: 'Metrô',
      tempo: '35 min',
      favorito: true
    },
    {
      id: 2,
      origem: 'Tatuapé',
      destino: 'Barra Funda',
      transporte: 'Trem',
      tempo: '25 min',
      favorito: true
    },
    {
      id: 3,
      origem: 'Terminal Vila Carrão',
      destino: 'Paulista',
      transporte: 'Ônibus + Metrô',
      tempo: '50 min',
      favorito: true
    },
    {
      id: 4,
      origem: 'Jabaquara',
      destino: 'Paraíso',
      transporte: 'Metrô',
      tempo: '20 min',
      favorito: true
    }
  ]

  return (
    <div>

      <section className="flex flex-col gap-4 pb-5">
        <div className="flex items-center justify-between pt-5 lg:pt-10">
          <div>
            <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
              Seus favoritos
            </h2>

            <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20 lg:w-90 w-65">
              Acesse rapidamente suas linhas e trajetos salvos para facilitar seus deslocamentos.
            </p>
          </div>
        </div>
      </section>

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
                    ${filtro === item
                  ? 'bg-vermelho-escuro text-white'
                  : 'bg-cinza-escuro text-cinza-medio hover:bg-sombra-vermelho'
                }`}
            >
              {item}
            </button>
          ))}

        </div>

      </section>

      {(filtro === 'Todos' || filtro === 'Trajetos') && (
        <section className="flex flex-col gap-4 mb-10">

          <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
            Seus trajetos
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:mx-20">
            {trajetosFavoritos.map((trajeto) => (
              <RotaCard 
                key={trajeto.id}
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

      {(filtro === 'Todos' || filtro === 'Linhas') && (
        <section className="flex flex-col gap-4">

          <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
            Suas linhas
          </h3>

          <div className="flex flex-col gap-3">
            {linhasFavoritas.map((linha) => (
              <LinhaCard
                key={linha.id}
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

    </div>
  )
}

export default Favoritos