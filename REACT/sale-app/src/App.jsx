import './App.css'
import { useState, useEffect, use } from 'react' //importacion modular
import Gamecard from './components/Gamecard/Gamecard'
import { useNavigate } from 'react-router-dom'
import productosApi from './api/productosApi';

function App() {
  const [busqueda, setBusqueda] = useState("")
  const productosOriginales = productosApi.getAll(); //devuelve un array con dos elementos: el estado actual y una funcion para actualizar ese estado
  const [productos, setProductos] = useState(productosOriginales)
  const navigate = useNavigate();

  // useEffect(() => {
  //   if(productos.length <= 0){
  //     alert("No se encontraron productos")
  //   }
  // }, [productos])

  useEffect(() => {
    const autenticar = () => {
      const usuario = JSON.parse(localStorage.getItem('usuarioLogueado'));
      if (!usuario) {
        navigate('/');
      }
    }
    autenticar();

  }, []);

  useEffect(() => {
    if (busqueda.length === 0) {
      setProductos(productosOriginales)
    }
    else if (busqueda.length > 3) {
      handleBuscar()

    }
  }, [busqueda])

  const handleBuscar = () => {
    const filtrados = productosOriginales.filter((item) => item.nombre.toLowerCase().includes(busqueda.toLowerCase()))
    setProductos(filtrados)
  }

  const handleLogout = () => {
    localStorage.removeItem('usuarioLogueado');
    navigate('/');
  }

  return (
    <>
      <header>
        <h1>Venta de garage</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea soluta pariatur sequi fugit ipsam excepturi nostrum nam, labore, rem, sed unde hic. Nam, tempora officia. Placeat exercitationem nisi fugiat tempora.</p>
      </header>
      <nav>
        <a href="/acerca">Acerca de</a>-
        <a href="/mantenimiento/productos">Mantenimiento </a>
      </nav>


      <main>
        <section className='sectionSearch'>
          <input type="text" placeholder='Bucar por nombre...' value={busqueda} onChange={(event) => setBusqueda(event.target.value)} />
          <button onClick={() => handleBuscar()}>Buscar</button>
        </section>
        <section className='sectionGames'>
          {
            productos.length > 0 ? productos.map((item) => { //renderizado condicional
              return (
                <Gamecard {...item} />
              )
            }) : <p>No se encontraron productos</p>
          }

        </section>

        <footer>
          <button onClick={() => handleLogout()}>Cerrar Sesion</button>

        </footer>


      </main>
    </>
  )
}

export default App
