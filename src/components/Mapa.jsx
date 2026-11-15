import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'

const iconeOrigem = L.divIcon({
  html: '<i class="fa-solid fa-location-dot"></i>',
  className: 'marcador-origem',
  iconSize: [30, 35],
  iconAnchor: [15, 35],
})

const iconeDestino = L.divIcon({
  html: '<i class="fa-solid fa-flag-checkered"></i>',
  className: 'marcador-destino',
  iconSize: [30, 35],
  iconAnchor: [15, 35],
})

function Mapa() {

  const centro = [-23.5505, -46.6333]

  return (
    <section className="flex flex-col gap-4 bg-cinza-escuro text-white rounded-2xl p-5">

      <div>
        <h2 className="text-lg font-bold text-titulo">
          Mapa do trajeto
        </h2>

        <p className="text-sm text-cinza-medio">
          Explore o mapa e visualize o seu caminho.
        </p>
      </div>

      <div className="relative z-0 w-full h-80 rounded-xl overflow-hidden">

        <MapContainer
          center={centro}
          zoom={12}
          scrollWheelZoom={true}
          className="w-full h-full"
        >

          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <Marker position={centro} icon={iconeOrigem}>
            <Popup>Origem</Popup>
          </Marker>

        </MapContainer>

      </div>

    </section>
  )
}

export default Mapa
