function AvisoCard({ titulo, descricao, horario, tipo }) {
  const iconesTipo = {
    info: <i className="fa-solid fa-circle-info text-informacao"></i>,
    alerta: <i className="fa-solid fa-triangle-exclamation text-alerta"></i>,
    urgente: <i className="fa-solid fa-circle-exclamation text-urgente"></i>
  }

  return (
    <div className="bg-cinza-escuro rounded-xl p-4 flex items-start gap-3  lg:my-2 lg:mx-20">

      <div className="text-xl">
        {iconesTipo[tipo]}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-bold text-titulo">
            {titulo}
          </h3>

          
        </div>

        <p className="text-sm text-cinza-medio mt-1">
          {descricao}
        </p>

        <span className="text-xs text-cinza-medio mt-2 block">
          {horario}
        </span>
      </div>

    </div>
  )
}

export default AvisoCard