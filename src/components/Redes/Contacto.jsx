import styled from "styled-components";

import LinkedIn from "@/assets/icons/brand-linkedin.svg";
import Github from "@/assets/icons/brand-github.svg";
import Correo from "@/assets/icons/mail.svg";
import Mobile from "@/assets/icons/device-mobile.svg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
const Contenedor = styled.div`
  display: flex;
  flex-direction: column;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  b {
    font-size: 14px;
  }
  div {
    display: flex;
    flex-direction: column;
  }
  p {
    font-size: 14px;
  }
  a {
    color: ${(props) => props.theme.text};
    font-size: 14px;
  }
  .SubTitulo {
    font-size: 12.5px;
    color: ${(props) => props.theme.textDesc};
  }
`;
const Imagen = styled.div`
  padding: 5px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colorSecondary};
  img {
    width: 45px;
    height: 45px;
  }
`;

const Contacto = () => {
  return (
    <>
      <Main>
        <b>Contacto</b>

        <Contenedor>
          <Links>
            <Imagen>
              <img src={LinkedIn} alt="Icono de LinkedIn" />
            </Imagen>
            <div>
              <b>LinkedIn</b>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://www.linkedin.com/in/front-end-angelo/"
              >
                /in/front-end-angelo/
              </a>
              <p className="SubTitulo">Conectemos!</p>
            </div>
          </Links>

          <Links>
            <Imagen>
              <img src={Github} alt="Icono de github" />
            </Imagen>
            <div>
              <b>GitHub</b>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://github.com/ElNuVaTo"
              >
                Angelo
              </a>
              <p className="SubTitulo">Ven a ver mis proyectos</p>
            </div>
          </Links>

          <Links>
            <Imagen>
              <img src={Correo} alt="Correo electronico" />
            </Imagen>
            <div>
              <b>Email</b>
              <p>angelo.a.developer@gmail.com</p>
              <p className="SubTitulo">Contactame por correo</p>
            </div>
          </Links>

          <Links>
            <Imagen>
              <img src={Mobile} alt="Icono de telefono" />
            </Imagen>
            <div>
              <b>Telefono</b>
              <p>+56 9 7823 4940</p>
              <p className="SubTitulo">Llamame</p>
            </div>
          </Links>
        </Contenedor>
      </Main>
    </>
  );
};
export default Contacto;
