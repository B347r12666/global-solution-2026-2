
import { useState } from 'react'

function Calculadora() {

    const [transporte, setTransporte] = useState('Onibus')
    const [modalidade, setModalidade] = useState('Comum')
    const [quantidade, setQuantidade] = useState(1)

    return (
        <section className="bg-cinza-escuro text-white rounded-2xl p-5 lg:mx-20">

            <h2 className="text-xl font-bold mb-1 text-titulo">
                Calcule sua viagem
            </h2>

            <p className="text-sm text-cinza-medio mb-5">
                Estime quanto você gastará com transporte público.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                <div className="flex flex-col gap-2">
                    <label className="text-sm">
                        Tipo de transporte
                    </label>

                    <select
                        value={transporte}
                        onChange={(e) => setTransporte(e.target.value)}
                        className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio"
                    >
                        <option value="Onibus">Ônibus</option>
                        <option value="Metro">Metrô</option>
                        <option value="Trem">Trem</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm">
                        Modalidade
                    </label>

                    <select
                        value={modalidade}
                        onChange={(e) => setModalidade(e.target.value)}
                        className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio"
                    >
                        <option value="Comum">Comum</option>
                        <option value="Estudante">Estudante</option>
                        <option value="Vale-transporte">Vale-transporte</option>
                    </select>
                </div>

                <div className="flex flex-col gap-2">
                    <label className="text-sm">
                        Quantidade de viagens
                    </label>

                    <input
                        type="number"
                        min="1"
                        value={quantidade}
                        onChange={(e) => setQuantidade(Math.max(1, Number(e.target.value)))}
                        className="w-full rounded-xl bg-fundo-input text-texto-input p-3 outline-none focus:ring-2 focus:ring-vermelho-medio"
                    />
                </div>

            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 p-4 mt-5 rounded-xl bg-vermelho-escuro">

                <div>
                    <p className="text-sm text-white/80">
                        Custo estimado
                    </p>

                    <p className="text-xs text-white/60">
                        {quantidade} viagem(ns) • {transporte} • {modalidade}
                    </p>
                </div>

                <span className="text-xl font-bold text-white">
                    Aguardando API
                </span>

            </div>

        </section>
    )
}

export default Calculadora
