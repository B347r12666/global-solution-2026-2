import { useState } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import BottomNav from './components/BottomNav'

import Home from './pages/Home'
import Rotas from './pages/Rotas'
import DetalhesViagem from './pages/DetalhesViagem'
import Linhas from './pages/Linhas'
import Relatos from './pages/Relatos'
import Tarifas from './pages/Tarifas'
import Avisos from './pages/Avisos'
import Favoritos from './pages/Favoritos'

function App() {
  const [menuAberto, setMenuAberto] = useState(false)
  const localizacao = useLocation()

  const paginas = {
    '/': {titulo: 'Início', subtitulo: 'Seu transporte e informações'},
    '/rotas': {titulo: 'Rotas', subtitulo: 'Encontre o melhor caminho'},
    '/viagem': {titulo: 'Detalhes da viagem', subtitulo: 'Acompanhe seu trajeto'},
    '/linhas': {titulo: 'Linhas', subtitulo: 'Suas linhas e estações'},
    '/relatos': {titulo: 'Relatos', subtitulo: 'Queremos te ouvir'},
    '/tarifas': { titulo: 'Tarifas', subtitulo: 'Consulte preços e benefícios'},
    '/avisos': { titulo: 'Avisos', subtitulo: 'Fique por dentro do transporte'},
    '/favoritos': {titulo: 'Favoritos', subtitulo: 'Seus trajetos salvos'}
  }

  const paginaAtual = paginas[localizacao.pathname]

  return (
    <div className="min-h-screen flex flex-col bg-cor-de-fundo">

      <Header
        menuAberto={menuAberto}
        setMenuAberto={setMenuAberto}
        titulo={paginaAtual?.titulo}
        subtitulo={paginaAtual?.subtitulo}
      />

      <div className="flex flex-1 min-h-0">

        <Sidebar aberta={menuAberto} />


        <main className="flex-1 min-w-0 p-5 pb-24 md:pb-5">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rotas" element={<Rotas />} />
            <Route path="/viagem" element={<DetalhesViagem />} />
            <Route path="/linhas" element={<Linhas />} />
            <Route path="/relatos" element={<Relatos />} />
            <Route path="/tarifas" element={<Tarifas />} />
            <Route path="/avisos" element={<Avisos />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </main>

      </div>

      <BottomNav />

    </div>
  )
}

export default App