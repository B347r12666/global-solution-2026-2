
function LinhaCard({ numero, nome, cor, status }) {
  const coresStatus = {
    Normal: 'text-status-normal-tx bg-status-normal-bg',
    'Com problemas': 'text-status-problema-tx bg-status-problema-bg',
    Interrompida: 'text-status-interrompida-tx bg-status-interrompida-bg',
    Fechada: 'text-status-fechada-tx bg-status-fechada-bg'
  }

  return (
    <div className="flex items-center justify-between bg-fundo-input rounded-xl p-3 lg:my-2 lg:mx-20">

      <div className="flex items-center gap-3">
        <div
          className="w-2 h-12 rounded-full"
          style={{ backgroundColor: cor }}
        />

        <div>
          <h3 className="font-bold text-cinza-escuro ">
            Linha {numero} - {nome}
          </h3>

          <p className="text-sm text-cinza-medio">
            Metrô / CPTM
          </p>
        </div>
      </div>

      <span className={`text-sm font-semibold px-3 py-1 rounded-full ${coresStatus[status]}`}>
        {status}
      </span>

    </div>
  )
}

export default LinhaCard
