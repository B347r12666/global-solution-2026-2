
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function BuscaTrajeto() {
    const navigate = useNavigate()

    const [origem, setOrigem] = useState('')
    const [destino, setDestino] = useState('')
    const [campoAtivo, setCampoAtivo] = useState('')

    const sugestoes = [
        { nome: 'Estação Corinthians-Itaquera', tipo: 'Metrô' },
        { nome: 'Estação Tatuapé', tipo: 'Metrô e CPTM' },
        { nome: 'Estação Sé', tipo: 'Metrô' },
        { nome: 'Estação da Luz', tipo: 'Metrô e CPTM' },
        { nome: 'Estação Barra Funda', tipo: 'Metrô e CPTM' },
        { nome: 'Terminal Parque Dom Pedro II', tipo: 'Ônibus' },
    ]

    const filtrarSugestoes = (valor) => {
        if (!valor.trim()) return sugestoes.slice(0, 5)

        return sugestoes.filter((item) =>
            item.nome.toLowerCase().includes(valor.toLowerCase())
        ).slice(0, 5)
    }

    const selecionarSugestao = (nome) => {
        if (campoAtivo === 'origem') {
            setOrigem(nome)
        } else {
            setDestino(nome)
        }

        setCampoAtivo('')
    }

    const buscarTrajeto = () => {
        if (!origem.trim() || !destino.trim()) return

        navigate('/rotas', {
            state: { origem, destino }
        })
    }

    return (
       <section className="bg-cinza-escuro text-white rounded-2xl p-5 lg:w-250 lg:mt-6 lg:mx-auto">
            <h2 className="text-xl font-bold mb-1 text-titulo">
                Para onde vamos?
            </h2>

            <p className="text-sm text-cinza-medio mb-5">
                Encontre o melhor caminho para sua viagem.
            </p>

            {/* Origem */}
            <div className="relative mb-4">
                <label className="block text-sm mb-2">
                    Origem
                </label>

                <input
                    type="text"
                    value={origem}
                    onChange={(e) => setOrigem(e.target.value)}
                    onFocus={() => setCampoAtivo('origem')}
                    placeholder="Digite sua localização"
                    className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio"
                />

                {campoAtivo === 'origem' && (
                    <div className="absolute z-20 w-full mt-2 bg-fundo-input text-texto-input rounded-xl shadow-lg overflow-hidden">
                        {filtrarSugestoes(origem).map((item) => (
                            <button
                                key={item.nome}
                                type="button"
                                onClick={() => selecionarSugestao(item.nome)}
                                className="w-full text-left p-3 hover:bg-fundo-input-hover border-b border-cinza-claro"
                            >
                                <span className="block font-medium">
                                    {item.nome}
                                </span>
                                <span className="text-sm text-cinza-escuro">
                                    {item.tipo}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Destino */}
            <div className="relative mb-5">
                <label className="block text-sm mb-2">
                    Destino
                </label>

                <input
                    type="text"
                    value={destino}
                    onChange={(e) => setDestino(e.target.value)}
                    onFocus={() => setCampoAtivo('destino')}
                    placeholder="Digite seu destino"
                    className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio"
                />

                {campoAtivo === 'destino' && (
                    <div className="absolute z-20 w-full mt-2 bg-fundo-input text-texto-input rounded-xl shadow-lg overflow-hidden">
                        {filtrarSugestoes(destino).map((item) => (
                            <button
                                key={item.nome}
                                type="button"
                                onClick={() => selecionarSugestao(item.nome)}
                                className="w-full text-left p-3 hover:bg-fundo-input-hover border-b border-cinza-claro"
                            >
                                <span className="block font-medium">
                                    {item.nome}
                                </span>
                                <span className="text-sm text-cinza-escuro">
                                    {item.tipo}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <button
                type="button"
                onClick={buscarTrajeto}
                disabled={!origem.trim() || !destino.trim()}
                className="w-full bg-vermelho-escuro hover:bg-sombra-vermelho disabled:opacity-40 disabled:cursor-not-allowed rounded-xl p-3 font-bold transition"
            >
                <i className="fa-solid fa-route mr-2"></i>
                Buscar trajeto
            </button>
        </section>
    )
}

export default BuscaTrajeto
