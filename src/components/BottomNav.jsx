import { NavLink } from 'react-router-dom'

function BottomNav() {
    const menu = [
        {
            nome: 'Início',
            rota: '/',
            icone: 'fa-house'
        },
        {
            nome: 'Avisos',
            rota: '/avisos',
            icone: 'fa-bell'
        },
        {
            nome: 'Favoritos',
            rota: '/favoritos',
            icone: 'fa-bookmark'
        },
    ]

    return (
        <nav className="fixed bottom-0 left-0 w-full bg-cinza-escuro text-white border-t border-white/10 px-2 py-3 z-50 md:hidden">

            <div className="flex items-center justify-around">

                {menu.map((item) => (
                    <NavLink
                        key={item.rota}
                        to={item.rota}
                        end={item.rota === '/'}
                        className={({ isActive }) =>
                            `flex flex-col items-center justify-center gap-1 min-w-0 px-2 transition-all
                            ${isActive
                                ? 'text-vermelho-medio'
                                : 'text-cinza-medio hover:text-white'
                            }`
                        }
                    >
                        <i className={`fa-solid ${item.icone} text-lg`}></i>

                        <span className="text-xs font-medium">
                            {item.nome}
                        </span>
                    </NavLink>
                ))}

            </div>
        </nav>
    )
}

export default BottomNav