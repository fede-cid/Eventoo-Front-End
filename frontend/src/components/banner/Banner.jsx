import Estilo from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={Estilo.ContenedorHero}>
      <div className={Estilo.ContenedorTex}>
        <h2 className={Estilo.Text}>
          Bievenidos a{" "}
          <h1 className={Estilo.Titulo}>
            EVEN<b>TOO</b>
          </h1>
        </h2>
        <h2 className={Estilo.Text}>donde tu eres el protagonista.</h2>
      </div>
    </div>
  );
};

export default Banner;
