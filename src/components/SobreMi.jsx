import styled from "styled-components";
import DownloadCV from "./DownloadCV";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const SobreMi = () => {
  return (
    <>
      <Main>
        <b>Sobre Mi</b>
        <p>
          Suelo ser una persona tranquila y ordenada. Me gusta participar
          activamente en el trabajo en equipo y asegurarme de que todos estemos
          en la misma página. Disfruto colaborando con mis compañeros para
          alcanzar nuestros objetivos de manera eficiente. Creo que la
          comunicación abierta y constante es clave para lograr un buen trabajo
          en equipo.
        </p>

        <DownloadCV />
      </Main>
    </>
  );
};
export default SobreMi;
