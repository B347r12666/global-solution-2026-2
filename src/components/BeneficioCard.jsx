function BeneficioCard({ icone, nome, descricao, valor, link }) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-xl bg-cinza-escuro border border-cinza-medio/50">

      <div className="flex items-center justify-center w-10 h-10 p-2 shrink-0 rounded-lg bg-vermelho-escuro text-white text-lg">
        <i className={icone}></i>
      </div>

      <div className="flex flex-col flex-1 min-w-0 gap-1">
        <h3 className="font-semibold text-sm text-titulo">
          {nome}
        </h3>

        <p className="text-xs text-cinza-medio">
          {descricao}
        </p>

        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-vermelho-medio hover:underline"
        >
          Consultar regras <i className="fa-solid fa-arrow-up-right-from-square ml-1"></i>
        </a>
      </div>

      <span className="text-sm font-semibold text-titulo whitespace-nowrap pr-2">
        {valor}
      </span>

    </div>
  )
}

export default BeneficioCard