//React-Router-Dom
import {Routes, Route  } from 'react-router-dom'

// Estilos
import '../styles/index.css'

//Paginas
import Inicio from './pages/Inicio'
import Productos from './pages/Productos'
import Restaurante from './pages/Restaurante'
import Carrito from './pages/Carrito'
import Checkout from './pages/Checkout'

//Componentes
import Navbar from './components/navegacion/Navbar'

// Context Producto
import ProductoState from './context/producto/ProductoState'
import Setting from './pages/Setting'

function App() {
  return (
    <ProductoState>
      <Navbar />
      <Routes>
        <Route path='/' element={ <Inicio/> } />
        <Route path='/Productos' element={ <Productos/> } />
        <Route path='/restaurante' element={ <Restaurante/> } />
        <Route path='/carrito' element={ <Carrito/> } />
        <Route path='/checkout' element={ <Checkout/> } />
        <Route path='/setting' element={ <Setting/> } />
      </Routes>
    </ProductoState>
  )
}

export default App;
