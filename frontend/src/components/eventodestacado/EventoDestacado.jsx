import { useContext } from 'react';

import StylesEvent from './EventoDestacado.module.css';

import ContenedorImagen from './ContenedorImagen';
import ContenedorInfo from './ContenedorInfo';

import ProductoContext from '../../context/producto/ProductoContext';

const EventoDestacado = () => {


    const producto= {
      id: 1,
      nombre: "Crea tu evento",
      explore: "Explora Eventoo",
      descripcion: "Organizar un evento ya no tiene por qué ser complicado. ¡Anímate a dar el primer paso y crea tu primer evento hoy mismo!",
      descripcion2: "Busca un evento de tu interes dentro de los cientos de organizadores que siempre nos eligen"
    }
  

  return (  
    <div className={StylesEvent.Contenedor}>
      <div className={StylesEvent.ContenedorDestacado}>

        <div className={StylesEvent.ContenedorDetalles}>
          <ContenedorImagen producto={producto}/>
          <ContenedorInfo producto={producto}/>
        </div>
      </div>
    </div>
  );
}
 
export default EventoDestacado;