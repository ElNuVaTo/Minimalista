import styled from "styled-components";

import Portada from "@/components/SobreMi/Portada";
import SobreMi from "@/components/SobreMi/SobreMi";
import Tecnologias from "@/components/Tecnologia/Tecnologias";
import Estudios from "@/components/Estudios/Estudios";
import Proyectos from "@/components/Proyectos/Proyectos";
import Contacto from "@/components/Redes/Contacto";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 15px 20px;
  max-width: 1000px;
  margin: auto;
`;

const Inicio = () => {
  return (
    <>
      <Main>
        <Portada />
        <SobreMi />
        <Tecnologias />
        <Estudios />
        <Proyectos/>
        <Contacto/>
      </Main>
    </>
  );
};

export default Inicio;
