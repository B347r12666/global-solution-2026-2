import React from 'react'

function TabelaTarifas() {
    return (
        <div className='flex flex-col gap-4'>
            <div className="overflow-x-auto lg:mx-20 rounded-xl border border-cinza-medio/60">
                <table className="w-full min-w-150 text-sm text-left">
                    <thead className="bg-vermelho-escuro text-white">
                        <tr>
                            <th className="p-4">Transporte</th>
                            <th className="p-4">Comum</th>
                            <th className="p-4">Estudante</th>
                            <th className="p-4">Vale-transporte</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-cinza-claro/60 text-titulo">
                        <tr>
                            <td className="p-4 font-semibold">
                                <i className="fa-solid fa-bus mr-2"></i>
                                Ônibus
                            </td>
                            <td className="p-4">Aguardando API</td>
                            <td className="p-4">Consultar</td>
                            <td className="p-4">Consultar</td>
                        </tr>

                        <tr>
                            <td className="p-4 font-semibold">
                                <i className="fa-solid fa-train-subway mr-2"></i>
                                Metrô
                            </td>
                            <td className="p-4">Aguardando API</td>
                            <td className="p-4">Consultar</td>
                            <td className="p-4">Consultar</td>
                        </tr>

                        <tr>
                            <td className="p-4 font-semibold">
                                <i className="fa-solid fa-train mr-2"></i>
                                Trem
                            </td>
                            <td className="p-4">Aguardando API</td>
                            <td className="p-4">Consultar</td>
                            <td className="p-4">Consultar</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <p className="text-xs text-cinza-medio lg:mx-20">
                Os valores serão atualizados conforme a disponibilidade dos dados oficiais.
                Regras de desconto e integração podem variar conforme a modalidade.
            </p>
        </div>
    )
}

export default TabelaTarifas