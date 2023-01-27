import { useContext } from 'react';

import Estilo from './EventoDestacado.module.css';

import ContenedorImagen from './ContenedorImagen';
import ContenedorInfo from './ContenedorInfo';

import ProductoContext from '../../context/producto/ProductoContext';

const EventoDestacado = () => {

  const { producto } = useContext(ProductoContext);

  return (  
    <div className={Estilo.Contenedor}>
      <div className={Estilo.ContenedorDestacado}>
        <h2 className={Estilo.EncabezadoPrincipal}>
          Welcome to Eventoo ! 
        </h2>
        <div className={Estilo.ContenedorDetalles}>
          <ContenedorImagen producto={producto}/>
          <ContenedorInfo producto={producto}/>
        </div>
      </div>
    </div>
  );
}
 
export default EventoDestacado;