import './App.css'
import { useState } from 'react' //importacion modular
import Gamecard from './components/Gamecard/Gamecard'
import productos from './data/productosData'

function App() {
  const [busqueda, setBusqueda] = useState("") //devuelve un array con dos elementos: el estado actual y una funcion para actualizar ese estado

  const handleBuscar = () => {
    productos.filter((item) => item.nombre.toLowerCase().includes(busqueda.toLowerCase()))

  }

  return (
    <>
      <header>
        <h1>Venta de garage</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea soluta pariatur sequi fugit ipsam excepturi nostrum nam, labore, rem, sed unde hic. Nam, tempora officia. Placeat exercitationem nisi fugiat tempora.</p>
      </header>
      <main>
        <section>
          <input type="text" placeholder='Bucar por nombre...' value={busqueda} onChange={(event) => setBusqueda(event.target.value)} />
          <button onClick={() => handleBuscar()}>Buscar</button>
        </section>
        <section>
          {
            productos.map((item) => {
              return (
                <Gamecard {...item} />

              )
            }
            )
          }

        </section>
      </main>
    </>
  )
}

export default App
