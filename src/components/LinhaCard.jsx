
import { useState } from 'react'

function LinhaCard({ numero, nome, cor, status, tipo, operadora, favorito = false }) {

  const [curtido, setCurtido] = useState(favorito)

  const coresStatus = {
    Normal: 'text-status-normal-tx bg-status-normal-bg',
    'Com problemas': 'text-status-problema-tx bg-status-problema-bg',
    Interrompida: 'text-status-interrompida-tx bg-status-interrompida-bg',
    Fechada: 'text-status-fechada-tx bg-status-fechada-bg'
  }

  return (
    <div className="flex items-center justify-between bg-fundo-input rounded-xl p-3 lg:my-2 lg:mx-20">

      <div className="flex items-center gap-3 min-w-0">
        <div
          className="w-2 h-12 rounded-full shrink-0"
          style={{ backgroundColor: cor }}
        />

        <div className="min-w-0">
          <h3 className="font-bold text-cinza-escuro">
            Linha {numero} - {nome}
          </h3>

          <p className="text-sm text-cinza-medio">
            {tipo}{operadora && ` • ${operadora}`}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3 shrink-0">

        <span className={`text-sm font-semibold px-3 py-1 rounded-full ${coresStatus[status]}`}>
          {status}
        </span>

        <i
          onClick={() => setCurtido(!curtido)}
          className={`fa-solid fa-heart cursor-pointer transition-colors ${
            curtido ? 'text-vermelho-medio' : 'text-cinza-medio'
          }`}
        ></i>

      </div>

    </div>
  )
}

export default LinhaCard
