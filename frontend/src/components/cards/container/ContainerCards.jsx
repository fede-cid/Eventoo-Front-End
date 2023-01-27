import CardProductos from "../cardproductos/CardProductos";
import style from './ContainerCards.module.css';
import IMG from '../../../../public/recursos/metallica.jpg';
import IMG2 from '../../../../public/recursos/event1.jpg';

const ContainerCards = () => {
  const data = {
    titulo: '',
    precio: '$2.500',
    img: IMG,
    img2: IMG2,
  }
  return (
    <>
      <div className={style.conteiner}>
        <div className={style.title}>
          <h1>Eventos mas populares </h1>
        </div>
        <div className={style.containerCards}>
          <div className={style.imgCard}>
            <img src={data.img2}/>
          </div>
          <div className={style.imgCard}>
            <img src={data.img2}/>
          </div>
          <div className={style.imgCard}>
            <img src={data.img2}/>
          </div>
        </div>
      </div>
      <div className={style.conteiner}>
        <div className={style.title}>
          <h1>Mas Eventos</h1>
        </div>
        <div className={style.containerCards}>
          <div>
            <CardProductos props={data}/>
          </div>
          <div>
            <CardProductos props={data}/>
          </div>
          <div>
            <CardProductos props={data}/>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContainerCards