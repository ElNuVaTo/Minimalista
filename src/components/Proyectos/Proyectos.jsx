import styled from "styled-components";

import Dragg from "./Dragg";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const Proyectos = () => {
  return (
    <>
      <Main>
        <b>Proyectos</b>
        <Dragg />
      </Main>
    </>
  );
};
export default Proyectos;
