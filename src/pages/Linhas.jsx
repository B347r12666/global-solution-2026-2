
import { useState } from 'react'
import LinhaCard from '../components/LinhaCard'

function Linhas() {

  const [filtro, setFiltro] = useState('Todos')
  const filtros = ['Todos', 'Metrô', 'Trem', 'Ônibus']
  const [busca, setBusca] = useState('')
  const [campoAtivo, setCampoAtivo] = useState(false)

  const linhas = [
    // Metrô
    { numero: '1', nome: 'Azul', cor: '#005CA9', status: 'Normal', tipo: 'Metrô' },
    { numero: '2', nome: 'Verde', cor: '#009B3A', status: 'Normal', tipo: 'Metrô' },
    { numero: '3', nome: 'Vermelha', cor: '#E32119', status: 'Normal', tipo: 'Metrô' },
    { numero: '4', nome: 'Amarela', cor: '#FFD700', status: 'Normal', tipo: 'Metrô' },
    { numero: '5', nome: 'Lilás', cor: '#9B3894', status: 'Normal', tipo: 'Metrô' },
    { numero: '15', nome: 'Prata', cor: '#A6A6A6', status: 'Normal', tipo: 'Metrô' },

    // Trens metropolitanos
    { numero: '7', nome: 'Rubi', cor: '#A51C30', status: 'Normal', tipo: 'Trem' },
    { numero: '8', nome: 'Diamante', cor: '#0099CC', status: 'Normal', tipo: 'Trem' },
    { numero: '9', nome: 'Esmeralda', cor: '#00A88F', status: 'Normal', tipo: 'Trem' },
    { numero: '10', nome: 'Turquesa', cor: '#008B8B', status: 'Normal', tipo: 'Trem' },
    { numero: '11', nome: 'Coral', cor: '#E97D27', status: 'Normal', tipo: 'Trem' },
    { numero: '12', nome: 'Safira', cor: '#005DAA', status: 'Normal', tipo: 'Trem' },
    { numero: '13', nome: 'Jade', cor: '#00A86B', status: 'Normal', tipo: 'Trem' },

    // Ônibus municipais - SPTrans
    { numero: '3766/10', nome: 'COHAB II - Metrô Itaquera', cor: '#E5A000', status: 'Normal', tipo: 'Ônibus', operadora: 'SPTrans' },
    { numero: '3732/10', nome: 'CPTM José Bonifácio - Metrô Itaquera', cor: '#E5A000', status: 'Normal', tipo: 'Ônibus', operadora: 'SPTrans' },
    { numero: '3712/10', nome: 'Jd. São João - Metrô Itaquera', cor: '#E5A000', status: 'Normal', tipo: 'Ônibus', operadora: 'SPTrans' },
    { numero: '4314/10', nome: 'Inácio Monteiro - Term. Pq. D. Pedro II', cor: '#E5A000', status: 'Normal', tipo: 'Ônibus', operadora: 'SPTrans' },

    // Ônibus metropolitanos - EMTU
    { numero: '284', nome: 'São Mateus - Santo André', cor: '#E5A000', status: 'Normal', tipo: 'Ônibus', operadora: 'EMTU' },
    { numero: '285', nome: 'São Mateus - São Bernardo do Campo', cor: '#E5A000', status: 'Normal', tipo: 'Ônibus', operadora: 'EMTU' },
    { numero: '286', nome: 'Santo André - São Bernardo do Campo', cor: '#E5A000', status: 'Normal', tipo: 'Ônibus', operadora: 'EMTU' },
    { numero: '287', nome: 'Santo André - Diadema', cor: '#E5A000', status: 'Normal', tipo: 'Ônibus', operadora: 'EMTU' },
  ]

  const sugestoes = [
    ...linhas.map((linha) => ({
      nome: `Linha ${linha.numero} - ${linha.nome}`,
      tipo: linha.tipo,
      operadora: linha.operadora
    })),
    { nome: 'Terminal Parque Dom Pedro II', tipo: 'Terminal' },
    { nome: 'Terminal Tatuapé', tipo: 'Terminal' },
    { nome: 'Estação Sé', tipo: 'Estação' },
    { nome: 'Estação Tatuapé', tipo: 'Estação' },
    { nome: 'Estação Barra Funda', tipo: 'Estação' }
  ]

  const linhasFiltradas = linhas.filter((linha) => {
    const correspondeFiltro =
      filtro === 'Todos' || linha.tipo === filtro

    const textoLinha =
      `Linha ${linha.numero} - ${linha.nome} ${linha.tipo} ${linha.operadora || ''}`

    const correspondeBusca =
      textoLinha.toLowerCase().includes(busca.trim().toLowerCase()) ||
      `${linha.numero} ${linha.nome}`.toLowerCase().includes(busca.trim().toLowerCase())

    return correspondeFiltro && correspondeBusca
  })

  const sugestoesFiltradas = sugestoes.filter((item) =>
    `${item.nome} ${item.tipo} ${item.operadora || ''}`
      .toLowerCase()
      .includes(busca.trim().toLowerCase())
  )

  return (
    <div className="flex flex-col gap-6">

      <section className="flex flex-col gap-4">
        <div className="flex items-center justify-between pt-5 lg:pt-10">
          <div>
            <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
              Linhas e transportes
            </h2>

            <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20">
              Explore as linhas de metrô, trens e ônibus de São Paulo e consulte informações sobre a operação.
            </p>
          </div>
        </div>
      </section>

      {/* Pesquisa */}
      <div className="relative w-full max-w-5xl mx-auto px-3 lg:px-6">

        <div className="flex items-center gap-3 bg-fundo-input rounded-xl px-4 py-2.5 focus-within:ring-2 focus-within:ring-vermelho-medio">

          <i className="fa-solid fa-magnifying-glass text-cinza-medio"></i>

          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            onFocus={() => setCampoAtivo(true)}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                setCampoAtivo(false)
              }
            }}
            placeholder="Buscar linha, estação ou terminal"
            className="w-full min-w-0 bg-transparent text-texto-input outline-none placeholder:text-cinza-medio text-sm"
          />

          {busca && (
            <button
              type="button"
              onClick={() => {
                setBusca('')
                setCampoAtivo(true)
              }}
              className="shrink-0 text-cinza-medio hover:text-vermelho-medio"
            >
              <i className="fa-solid fa-xmark"></i>
            </button>
          )}
        </div>

        {campoAtivo && busca.trim() !== '' && (
          <div className="absolute left-3 right-3 lg:left-6 lg:right-6 z-20 mt-2 bg-fundo-input text-texto-input rounded-xl shadow-lg max-h-115 lg:max-h-130 overflow-y-auto overscroll-contain">

            {sugestoesFiltradas.length > 0 ? (
              sugestoesFiltradas.map((item) => (
                <button
                  key={item.nome}
                  type="button"
                  onClick={() => {
                    setBusca(item.nome)
                    setCampoAtivo(false)
                  }}
                  className="w-full text-left p-3 hover:bg-fundo-input-hover border-b border-cinza-claro"
                >
                  <span className="block font-medium">
                    {item.nome}
                  </span>

                  <span className="text-sm text-cinza-escuro">
                    {item.tipo}
                    {item.operadora && ` • ${item.operadora}`}
                  </span>
                </button>
              ))
            ) : (
              <p className="p-3 text-sm text-cinza-medio">
                Nenhum resultado encontrado.
              </p>
            )}
          </div>
        )}
      </div>

      <section>
        <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
          Filtrar transportes
        </h3>

        <div className="flex flex-nowrap gap-2 overflow-x-auto justify-center">
          {filtros.map((item) => (
            <button
              key={item}
              onClick={() => setFiltro(item)}
              className={`px-5 py-0.5 mt-2 rounded-4xl text-sm lg:text-sm font-semibold transition-all
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

      <section className="flex flex-col gap-3 w-full max-w-5xl mx-auto px-3 lg:px-6">

        {linhasFiltradas.length > 0 ? (
          linhasFiltradas.map((linha) => (
            <LinhaCard
              key={`${linha.tipo}-${linha.numero}`}
              {...linha}
            />
          ))
        ) : (
          <p className="text-center text-cinza-medio  italic py-8">
            Nenhuma linha encontrada.
          </p>

        )}

      </section>

    </div>
  )
}

export default Linhas