import styled from "styled-components";

import Foto from "@/assets/img/Angelo.webp";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2px;

  p {
    color: #b0b9be;
  }
`;
const Imagen = styled.div`
  border-radius: 50%;
  height: 145px;
  width: 145px;
  margin-bottom: 2px;
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    transform: rotate(-25deg);
  }
`;

const Portada = () => {
  return (
    <>
      <Main>
        <Imagen>
          <img src={Foto} alt="Selfie de una persona" />
        </Imagen>
        <b>Angelo Alcaino </b>
        <p>Desarrollador Frontend</p>
      </Main>
    </>
  );
};
export default Portada;
