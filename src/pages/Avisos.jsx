import { useState } from 'react'
import AvisoCard from '../components/AvisoCard'

function Avisos() {
    const [filtro, setFiltro] = useState('Todos')

    const avisos = [
        {
            id: 1,
            titulo: 'Alteração na circulação',
            descricao: 'A Linha 3-Vermelha apresenta alterações na operação.',
            horario: '10:30',
            data: '12/11/2026',
            tipo: 'info',
            linha: 'Linha 3 - Vermelha'
        },
        {
            id: 2,
            titulo: 'Operação com lentidão',
            descricao: 'A Linha 11-Coral opera com velocidade reduzida.',
            horario: '09:45',
            data: '12/11/2026',
            tipo: 'alerta',
            linha: 'Linha 11 - Coral'
        },
        {
            id: 4,
            titulo: 'Funcionamento normal',
            descricao: 'Circulação sem alterações operacionais.',
            horario: '08:50',
            data: '11/11/2026',
            tipo: 'info',
            linha: 'Linha 1 - Azul'
        },
        {
            id: 3,
            titulo: 'Interrupção na circulação',
            descricao: 'Serviço temporariamente interrompido na linha.',
            horario: '09:15',
            data: '11/11/2026',
            tipo: 'urgente',
            linha: 'Linha 7 - Rubi'
        },
        {
            id: 5,
            titulo: 'Atenção nas plataformas',
            descricao: 'Atenção ao embarque devido ao fluxo elevado de passageiros.',
            horario: '08:20',
            data: '10/11/2026',
            tipo: 'alerta',
            linha: 'Linha 3 - Vermelha'
        },
        {
            id: 6,
            titulo: 'Serviço restabelecido',
            descricao: 'A circulação foi normalizada após ocorrência.',
            horario: '07:55',
            data: '10/11/2026',
            tipo: 'info',
            linha: 'Linha 11 - Coral'
        }
    ]

    const filtros = ['Todos', 'Informativos', 'Atenção', 'Urgentes']

    const avisosFiltrados = avisos.filter((aviso) => {
        if (filtro === 'Todos') return true
        if (filtro === 'Informativos') return aviso.tipo === 'info'
        if (filtro === 'Atenção') return aviso.tipo === 'alerta'
        if (filtro === 'Urgentes') return aviso.tipo === 'urgente'

        return true
    })

    const quantidade = {
        todos: avisos.length,
        informativos: avisos.filter(aviso => aviso.tipo === 'info').length,
        alertas: avisos.filter(aviso => aviso.tipo === 'alerta').length,
        urgentes: avisos.filter(aviso => aviso.tipo === 'urgente').length
    }

    const quantidadeFiltro = {
        Todos: quantidade.todos,
        Informativos: quantidade.informativos,
        Atenção: quantidade.alertas,
        Urgentes: quantidade.urgentes
    }

    return (
        <div className="flex flex-col gap-6">

            <section className="flex flex-col gap-4">

                <div className="flex items-center justify-between pt-5 lg:pt-10">
                    <div>
                        <h2 className="text-xl font-bold text-titulo pl-2 pt-2 border-t-2 border-vermelho-escuro lg:my-2 lg:ml-20">
                            Central de avisos
                        </h2>

                        <p className="text-sm text-cinza-medio pl-2 pb-2 lg:my-2 lg:ml-20">
                            Acompanhe as ocorrências do transporte.
                        </p>
                    </div>
                </div>
            </section>

            <section className="flex flex-col gap-2">

                <h3 className="text-sm font-semibold italic text-cinza-claro lg:my-2 lg:ml-20 lg:text-[16px]">
                    Filtrar avisos
                </h3>

                <div className="flex flex-nowrap gap-1 overflow-x-auto justify-center">

                    {filtros.map((item) => (
                        <button
                            key={item}
                            onClick={() => setFiltro(item)}
                            className={`px-3 py-1 rounded-4xl text-[11.8px] lg:text-sm font-semibold transition-all
                                ${filtro === item
                                    ? 'bg-vermelho-escuro text-white'
                                    : 'bg-cinza-escuro text-cinza-medio hover:bg-sombra-vermelho'
                                }`}
                        >
                            {item} <span className=' italic font-light text-white/50'>({quantidadeFiltro[item]})</span>
                        </button>
                    ))}

                </div>

            </section>

            <section className="flex flex-col gap-4 lg:my-2 lg:ml-20">

                <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-titulo">
                        {filtro === 'Todos' ? 'Avisos recentes' : filtro}
                    </h3>

                </div>

                {avisosFiltrados.length > 0 ? (
                    avisosFiltrados.map((aviso) => (
                        <div key={aviso.id} className="flex flex-col gap-2">
                            <p className="text-xs lg:text-sm  text-cinza-medio">
                                {aviso.linha}
                            </p>

                            <AvisoCard
                                titulo={aviso.titulo}
                                descricao={aviso.descricao}
                                horario={aviso.horario}
                                data={aviso.data}
                                tipo={aviso.tipo}
                            />
                        </div>
                    ))
                ) : (
                    <p className="text-center text-cinza-medio  italic py-8">
                        Nenhum aviso encontrado nesta categoria.
                    </p>
                )}

            </section>

        </div>
    )
}

export default Avisos