import styled from "styled-components";
import SchoolComponents from "./SchoolComponents";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Estudios = () => {
  return (
    <>
      <Main>
        <b>Estudios</b>

        <Contenedor>
          <SchoolComponents
            href="https://www.coursera.org/account/accomplishments/professional-cert/QSSVTP8ZREX5"
            titulo="Meta Front-End Developer"
            desc="Desarrollador React - 15 de Abril 2023"
          />

          <SchoolComponents
            href="https://app.diplomasafe.com/es-ES/diploma/dcf62f1056fa862639dd0196f9114ba2fe7ee96af"
            titulo="Coding Dojo"
            desc="Desarrollador Mern - 2 de Julio 2023"
          />

          <SchoolComponents
            href="https://www.iplacex.cl/carreras/carreras-100-online/analista-programador/"
            titulo="Iplacex"
            desc="Analista Programador - Actualmente"
          />
        </Contenedor>
      </Main>
    </>
  );
};

export default Estudios;
