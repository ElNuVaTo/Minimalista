import styled from "styled-components";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Contenedor = styled.div`
 display: flex;
 flex-wrap: wrap;
 gap: 5px;
`;
const Tecno = styled.p`
 background-color: ${(props) => props.theme.colorSecondary};
 width: max-content;
 padding: 4px 10px;
 border-radius: 5px;

 
`;
const Tecnologias = () => {
  return (
    <Main>
      <b>Tecnologias</b>


      <Contenedor>
        <Tecno>HTML</Tecno>
        <Tecno>CSS</Tecno>
        <Tecno>JavaScript</Tecno>
        <Tecno>MongoDB</Tecno>
        <Tecno>Express</Tecno>
        <Tecno>React</Tecno>
        <Tecno>NodeJS</Tecno>
        <Tecno>Figma</Tecno>
      </Contenedor>
    </Main>
  );
};
export default Tecnologias;
