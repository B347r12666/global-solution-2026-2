function Header({ titulo, subtitulo, menuAberto, setMenuAberto }) {
    return (
        <header className="relative z-50 w-full bg-cinza-escuro text-white border-b border-white/10 px-3 py-6 flex items-center gap-5">

            <button
                onClick={() => setMenuAberto(prev => !prev)}
                className="text-2xl hover:text-vermelho-medio transition"
            >
                <i
                    className={`fa-solid fa-angles-left transition-transform duration-300 ${menuAberto ? 'rotate-0' : 'rotate-180'
                        }`}
                ></i>
            </button>

            <div className="absolute left-1/2 -translate-x-1/2 text-center">
                <h1 className="text-2xl font-bold text-cinza-medio pt-3">
                    {titulo}
                </h1>
                <p className="text-sm text-vermelho-claro pb-1 font-semibold italic">
                    {subtitulo}
                </p>
            </div>

        </header>
    )
}

export default Header