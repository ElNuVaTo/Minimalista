import styled from "styled-components";

import Portada from "@/components/Portada";
import SobreMi from "@/components/SobreMi";
import Tecnologias from "@/components/Tecnologias";
import Estudios from "@/components/Estudios";
import Proyectos from "@/components/Proyectos/Proyectos";
import Contacto from "@/components/Contacto";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  padding: 15px 20px;
  max-width: 420px;
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
