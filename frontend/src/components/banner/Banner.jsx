import Estilo from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={Estilo.ContenedorHero}>
      <div className={Estilo.ContenedorTex}>
        <h2 className={Estilo.Text}>
          Welcome to <h1 className={Estilo.Titulo}>
            My<b>Portfolio</b>
          </h1>
        </h2>
        <h2 className={Estilo.Text}>Front End Developer</h2>
      </div>
    </div>
  );
};

export default Banner;
