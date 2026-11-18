import { useAuth } from "../auth/AuthContext";

// function Header({ titulo, subtitulo, menuAberto, setMenuAberto }) {
//   const { isAuthenticated, user, logout } = useAuth();

//   return (
//     <>
//       <header className="relative z-50 w-full bg-cinza-escuro text-white border-b border-white/10 px-3 py-6 flex items-center gap-5">
//         <button
//           onClick={() => setMenuAberto((prev) => !prev)}
//           className="text-2xl hover:text-vermelho-medio transition"
//         >
//           <i
//             className={`fa-solid fa-angles-left transition-transform duration-300 ${
//               menuAberto ? "rotate-0" : "rotate-180"
//             }`}
//           ></i>
//         </button>

//         <div className="absolute left-1/2 -translate-x-1/2 text-center">
//           <h1 className="text-2xl font-bold text-cinza-medio pt-3">{titulo}</h1>
//           <p className="text-sm text-vermelho-claro pb-1 font-semibold italic">
//             {subtitulo}
//           </p>
//         </div>
//       </header>

//       <div className="absolute right-3 flex items-center gap-3 z-100">

//         {isAuthenticated ? (
//           <>
//             <span className="text-sm font-semibold text-cinza-medio">
//               Olá, {user?.nome}
//             </span>

//             <button
//               onClick={logout}
//               className="flex items-center gap-2 bg-vermelho-medio hover:bg-sombra-vermelho text-white px-3 py-2 rounded-md text-sm font-semibold transition"
//             >
//               <i className="fa-solid fa-right-from-bracket"></i>
//               Sair
//             </button>
//           </>
//         ) : (
//           <button
//             onClick={() => window.location.href = "/login"}
//             className="flex items-center gap-2 bg-vermelho-medio hover:bg-sombra-vermelho text-white px-4 py-2 rounded-md text-sm font-semibold transition"
//           >
//             <i className="fa-solid fa-right-to-bracket"></i>
//             Entrar
//           </button>
//         )}

//       </div>
//     </>
//   );
// }

function Header({ titulo, subtitulo, menuAberto, setMenuAberto }) {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="relative z-50 w-full bg-cinza-escuro text-white border-b border-white/10 px-3 py-3 sm:px-5 sm:py-4">
      {/* Linha superior: menu e autenticação */}
      <div className="flex items-center justify-between min-h-10">
        {/* Botão do menu */}
        <button
          onClick={() => setMenuAberto((prev) => !prev)}
          className="text-xl sm:text-2xl hover:text-vermelho-medio transition"
          aria-label="Abrir ou fechar menu"
        >
          <i
            className={`fa-solid fa-angles-left transition-transform duration-300 ${
              menuAberto ? "rotate-0" : "rotate-180"
            }`}
          ></i>
        </button>

        {/* Autenticação */}
        <div className="flex items-center gap-2 sm:gap-3">
          {isAuthenticated ? (
            <>
              <span className="text-xs sm:text-sm font-semibold text-cinza-medio max-w-27.5 sm:max-w-none truncate">
                Olá, {user?.nome}
              </span>

              <button
                onClick={logout}
                className="flex items-center gap-1 sm:gap-2 bg-vermelho-medio hover:bg-sombra-vermelho text-white px-2 sm:px-3 py-2 rounded-md text-xs sm:text-sm font-semibold transition"
              >
                <i className="fa-solid fa-right-from-bracket"></i>
                <span>Sair</span>
              </button>
            </>
          ) : (
            <button
              onClick={() => (window.location.href = "/login")}
              className="flex items-center gap-1 sm:gap-2 bg-vermelho-medio hover:bg-sombra-vermelho text-white px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm font-semibold transition"
            >
              <i className="fa-solid fa-right-to-bracket"></i>
              <span>Entrar</span>
            </button>
          )}
        </div>
      </div>

      {/* Título e subtítulo */}
      <div className="text-center mt-3 sm:mt-0 sm:absolute sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 sm:w-1/2 px-2 pointer-events-none">
        <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-cinza-medio leading-tight">
          {titulo}
        </h1>

        <p className="text-xs sm:text-sm text-vermelho-claro font-semibold italic mt-1">
          {subtitulo}
        </p>
      </div>
    </header>
  );
}

export default Header;
