import { useContext } from 'react';

import StylesEvent from './EventoDestacado.module.css';

import ContenedorImagen from './ContenedorImagen';
import ContenedorInfo from './ContenedorInfo';

import ProductoContext from '../../context/producto/ProductoContext';

const EventoDestacado = () => {

  const { producto } = useContext(ProductoContext);

  return (  
    <div className={StylesEvent.Contenedor}>
      <div className={StylesEvent.ContenedorDestacado}>
        <h2 className={StylesEvent.EncabezadoPrincipal}>
          Welcome to Eventoo ! 
        </h2>
        <div className={StylesEvent.ContenedorDetalles}>
          <ContenedorImagen producto={producto}/>
          <ContenedorInfo producto={producto}/>
        </div>
      </div>
    </div>
  );
}
 
export default EventoDestacado;