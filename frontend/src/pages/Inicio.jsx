import EventoDestacado from "../components/eventodestacado/EventoDestacado";
import Banner from "../components/banner/Banner";
import ContainerCards from "../components/cards/container/ContainerCards";

const Inicio = () => {
  return (
    <>
      <Banner />
      <ContainerCards />

      <EventoDestacado />

      <p>
   
      </p>
      <div
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
      </div>

    </>
  );
};

export default Inicio;
