function TarifaCard({ icones, nome, valor, duracao }) {
  return (
    <>
      <div className="flex items-center gap-4 p-4 rounded-xl bg-cinza-escuro border border-cinza-medio/50">
        <div
          className={`flex items-center justify-center w-${icones.length === 1 ? 12 : 0} h-12 rounded-lg bg-vermelho-escuro text-white text-xl `}
        >
          {icones.map((icone) => (
            <i key={icone} className={icone}></i>
          ))}
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-titulo">{nome}</h3>

          <p className="text-xl font-bold text-titulo">{valor}</p>

          <p className="text-xs text-cinza-medio">
            Tempo de baldeação: {duracao} min
          </p>
        </div>
      </div>
    </>
  );
}

export default TarifaCard;
