import CardProductos from "../cardproductos/CardProductos";
import CardCarousel from "./carrucel/CarrucelMUI";
import style from "./ContainerCards.module.css";


const ContainerCards = () => {
  const cards = [
    {
      id: 1,
      title: "Eventoo",
      description: "https://www.eventoo.com.ar/",
      imageUrl: "../../../../public/recursos/Eventoo.png",
    },
    {
      id: 2,
      title: "Pokemons Wiki",
      description: "https://quiet-monstera-a80bcc.netlify.app/home",
      imageUrl: "../../../../public/recursos/PokemonWiki.png",
    },
  ];
  return (
    <>
      {/* <div className={style.conteiner}>
        <div className={style.title}>
          <h2>My Proyect's </h2>
        </div>
        <div className={style.containerCards}>
          {data.map((e) => (
            <>
              <div className={style.proyects}>
                <a className={style.url} href={`${e.url}`} target="_blank"><h3>{e.titulo}</h3></a>
                <div className={style.imgCard}>
                  <img src={e.img2} />
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <div className={style.conteiner}>
        <div className={style.title}> */}
        <CardCarousel cards={cards}/>
          {/* <h1>Mas Eventos</h1>
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
          </div> */}
        {/* </div>
      </div> */}
    </>
  );
};

export default ContainerCards;
