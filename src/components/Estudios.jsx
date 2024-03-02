import styled from "styled-components";

import EscuelaIcons from "@/assets/icons/school.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const IconsSchool = styled.div`
  width: 25px;
  height: 25px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Estudio = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  p {
    font-size: 12.5px;
    color: #b0b9be;
  }
  a {
    color: black;
  }

  /* Estilo para todos los elementos menos el último */
  &:not(:last-child)::before {
    content: "";
    position: absolute;
    height: 28px;
    width: 5px;
    border-left: 1px solid #b0b9be;
    left: 12.5px;
    top: 25px;
  }
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

const Estudios = () => {
  return (
    <>
      <Main>
        <b>Estudios</b>

        <Contenedor>
          <Estudio>
            <IconsSchool>
              <img src={EscuelaIcons} alt="Sombrero de graduacion" />
            </IconsSchool>

            <Info>
              <a
                href="https://www.coursera.org/account/accomplishments/professional-cert/QSSVTP8ZREX5"
                rel="noreferrer"
                target="_blank"
              >
                Meta Front-End Developer
              </a>
              <p>Desarrollador React - 15 de Abril 2023</p>
            </Info>
          </Estudio>

          <Estudio>
            <IconsSchool>
              <img src={EscuelaIcons} alt="Sombrero de graduacion" />
            </IconsSchool>

            <Info>
              <a
                href="https://app.diplomasafe.com/es-ES/diploma/dcf62f1056fa862639dd0196f9114ba2fe7ee96af"
                rel="noreferrer"
                target="_blank"
              >
                Coding Dojo
              </a>
              <p>Desarrollador Mern - 2 de Julio 2023</p>
            </Info>
          </Estudio>

          <Estudio>
            <IconsSchool>
              <img src={EscuelaIcons} alt="Sombrero de graduacion" />
            </IconsSchool>

            <Info>
              <a
                href="https://www.iplacex.cl/carreras/carreras-100-online/analista-programador/"
                rel="noreferrer"
                target="_blank"
              >
                Iplacex
              </a>
              <p>Analista Programador - Actualmente</p>
            </Info>
          </Estudio>
        </Contenedor>
      </Main>
    </>
  );
};
export default Estudios;
