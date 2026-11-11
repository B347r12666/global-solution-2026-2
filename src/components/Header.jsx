function Header({ menuAberto, setMenuAberto }) {
    return (
        <header className="w-full bg-cinza-escuro text-white px-6 py-4 flex items-center gap-5">

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
                <h1 className="text-2xl font-bold">
                    Titulo <span className="text-vermelho-medio">Aqui</span>
                </h1>
                <p className="text-sm text-cinza-medio">
                    Sub titulo
                </p>
            </div>

        </header>
    )
}

export default Header