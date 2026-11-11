import { NavLink } from 'react-router-dom'

function Sidebar({ aberta }) {
    const menu = [
        { nome: 'Rotas', rota: '/rotas', icone: 'fa-solid fa-route' },
        { nome: 'Linhas', rota: '/linhas', icone: 'fa-solid fa-train' },
        { nome: 'Relatos', rota: '/relatos', icone: 'fa-solid fa-comment' },
        { nome: 'Tarifas', rota: '/tarifas', icone: 'fa-solid fa-ticket-simple' },
    ]

    const menuResponsivo = [
        { nome: 'Início', rota: '/', icone: 'fa-solid fa-house' },
        { nome: 'Avisos', rota: '/avisos', icone: 'fa-solid fa-bell' },
        { nome: 'Favoritos', rota: '/favoritos', icone: 'fa-solid fa-bookmark' },
    ]

    return (
        <aside className={`fixed inset-y-0 left-0 z-40 w-64 ${aberta ? 'translate-x-0 md:w-64' : '-translate-x-full md:w-0'} shrink-0 overflow-hidden bg-cinza-escuro text-white transition-all duration-300 flex flex-col md:sticky md:top-0 md:left-auto md:z-auto md:h-screen md:translate-x-0`}>
          
            <nav className="flex flex-1 flex-col justify-center gap-2 p-5">

                <div className="hidden md:flex flex-col gap-2">
                    {menuResponsivo.map((item) => (
                        <NavLink
                            key={item.rota}
                            to={item.rota}
                            end={item.rota === '/'}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                                ${isActive
                                    ? 'bg-vermelho-escuro text-white font-bold'
                                    : 'text-cinza-medio hover:bg-sombra-vermelho'
                                }`
                            }
                        >
                            <span className="w-6 flex justify-center text-lg">
                                <i className={item.icone}></i>
                            </span>

                            <span className="font-medium italic whitespace-nowrap">
                                {item.nome}
                            </span>
                        </NavLink>
                    ))}
                </div>

                {menu.map((item) => (
                    <NavLink
                        key={item.rota}
                        to={item.rota}
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all
                            ${isActive
                                ? 'bg-vermelho-escuro text-white font-bold'
                                : 'text-cinza-medio hover:bg-sombra-vermelho'
                            }`
                        }
                    >
                        <span className="w-6 flex justify-center text-lg">
                            <i className={item.icone}></i>
                        </span>

                        <span className="font-medium italic whitespace-nowrap">
                            {item.nome}
                        </span>
                    </NavLink>
                ))}

            </nav>

            {aberta && (
                <p className="p-5 text-xs text-cinza-medio italic">
                    São Paulo © 2026
                </p>
            )}

        </aside>
    )
}

export default Sidebar