
function ComentarioCard({ transporte, linha, data, nota, comentario }) {

  return (
    <>
      <div className="flex flex-col gap-3 bg-cinza-escuro text-white rounded-2xl p-4 border border-cinza-claro">

        <div className="flex items-center justify-between gap-3">
          <div>
            <h3 className="font-bold text-titulo">{transporte}</h3>
            <p className="text-xs text-cinza-medio">{linha}</p>
          </div>

          <span className="text-xs text-cinza-medio">{data}</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((estrela) => (
              <i
                key={estrela}
                className={`fa-solid fa-star ${estrela <= nota ? '' : 'text-cinza-medio'
                  }`}
              ></i>
            ))}
          </div>

          <span className="text-sm font-semibold">{nota}/5</span>
        </div>

        <p className="text-sm text-cinza-medio leading-relaxed">
          {comentario}
        </p>

      </div>

    </>
  )
}

export default ComentarioCard
