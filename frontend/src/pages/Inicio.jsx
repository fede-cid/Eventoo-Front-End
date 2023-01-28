import EventoDestacado from "../components/eventodestacado/EventoDestacado";
import Banner from "../components/banner/Banner";
import ContainerCards from "../components/cards/container/ContainerCards";
import Footer from "../components/Footer/Footer";
import Menu from "../components/menu/Menu";

const Inicio = () => {
  return (
    <>
      <Menu />
      <Banner />
      <EventoDestacado />
      <Footer />
      {/* <ContainerCards /> */}

      {/* <div
        style={{
          width: "100%",
          maxWidth: "768px",
          margin: "0 auto",
          padding: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <button className="btnprimario width-100">Botón primario</button>
        <button className="btnsecundario">Botón secundario</button>
        <button className="btnicono">Con Icono</button>
      </div> */}
    </>
  );
};

export default Inicio;
