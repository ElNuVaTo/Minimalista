import styled from "styled-components";

import schoolLight from "@/assets/icons/light/school.svg";
import schoolDark from "@/assets/icons/dark/school.svg";

const Estudio = styled.div`
  display: flex;
  gap: 10px;
  position: relative;
  p {
    font-size: 12.5px;
    color: #b0b9be;
  }
  a {
    color: ${(props) => props.theme.text};
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
const Imagen_Dark = styled.div`
  width: 25px;
  height: 25px;
  display: ${(props) => props.theme.iconsWhite};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
const Imagen_Ligth = styled.div`
  width: 25px;
  height: 25px;
  display: ${(props) => props.theme.iconsBlack};
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SchoolComponents = ({ href, titulo, desc }) => {
  return (
    <>
      <Estudio>
        <Imagen_Dark>
          <img src={schoolDark} alt="Sombrero de graduacion" />
        </Imagen_Dark>

        <Imagen_Ligth>
          <img src={schoolLight} alt="Sombrero de graduacion" />
        </Imagen_Ligth>

        <Info>
          <a href={href} rel="noreferrer" target="_blank">
            {titulo}
          </a>
          <p>{desc}</p>
        </Info>
      </Estudio>
    </>
  );
};

export default SchoolComponents;
