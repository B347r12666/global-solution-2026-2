import { useState } from 'react'

function RotaCard({ origem, destino, transporte, tempo, favorito = false }) {

  const [curtido, setCurtido] = useState(favorito)

  return (
   <div className="flex flex-col gap-4 bg-cinza-escuro text-white rounded-2xl p-4 border border-cinza-claro lg:mt-5 w-full max-w-87.5 lg:max-w-none lg:mx-auto">

      <div className="flex items-center justify-between italic">
        <span className="text-sm font-semibold text-titulo">
          Trajeto
        </span>

        <i
          onClick={() => setCurtido(!curtido)}
          className={`fa-solid fa-heart cursor-pointer transition-colors ${curtido ? 'text-vermelho-medio' : 'text-cinza-medio'
            }`}
        ></i>
      </div>

      <div className="flex flex-col gap-3">

        <div className="flex items-center gap-3">
          <i className="fa-solid fa-circle-dot text-green-500"></i>
          <div>
            <p className="text-xs text-cinza-medio">Origem</p>
            <p className="text-sm font-semibold">{origem}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <i className="fa-solid fa-location-dot text-vermelho-medio"></i>
          <div>
            <p className="text-xs text-cinza-medio">Destino</p>
            <p className="text-sm font-semibold">{destino}</p>
          </div>
        </div>

      </div>

      <div className="flex items-center justify-between border-t border-cinza-claro pt-3">
        <span className="flex items-center gap-2 text-xs text-cinza-medio">
          <i className="fa-solid fa-train-subway"></i>
          {transporte}
        </span>

        <span className="flex items-center gap-2 text-xs text-cinza-medio">
          <i className="fa-regular fa-clock"></i>
          {tempo || '--'}
        </span>
      </div>

    </div>
  )
}

export default RotaCard