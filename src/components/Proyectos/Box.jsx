import styled from "styled-components";
import BancoFalabella from "@/assets/img/BancoFalabella.webp";
import HolosPet from "@/assets/img/HolosPet.webp";
import Utopia from "@/assets/img/Utopia.webp";
import Sense from "@/assets/img/Sense.webp";
import LittleLemon from "@/assets/img/littleLemon.webp";
import BotDiscord from "@/assets/img/BotDiscord.webp";

const Contenedor = styled.div`
  display: flex;
  user-select: none;
  flex-shrink: 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 180px;
  gap: 5px;
  border-radius: 10px;
  padding-bottom: 15px;
  overflow: hidden;

  box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  p {
    font-size: 13px;
  }
  a {
    width: 145px;
    margin-top: 10px;
    border-radius: 15px;
    padding: 5px 0;
    background-color: #f1f2f6;
    text-align: center;
    text-decoration: none;
    color: #252525;
  }
`;
const Texto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 5px 10px;
  gap: 5px;
`;
const Imagen = styled.div`
  width: 100%;
  aspect-ratio: 1/1;
  overflow: hidden;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const Box = () => {
  return (
    <>
   <Contenedor>
  <Imagen>
    <img src={Utopia} alt="PlaceHolder" draggable={false} />
  </Imagen>
  <Texto>
    <b>Inmobiliaria</b>
    <p>Lideré al equipo, organicé reuniones para lograr...</p>
    <a href="#" draggable={false}>
      Pronto...
    </a>
  </Texto>
</Contenedor>

<Contenedor>
  <Imagen>
    <img src={HolosPet} alt="PlaceHolder" draggable={false} />
  </Imagen>
  <Texto>
    <b>Mascotas</b>
    <p>Hice que la página se viera más cómoda, también logré...</p>
    <a href="#" draggable={false}>
      Pronto...
    </a>
  </Texto>
</Contenedor>

<Contenedor>
  <Imagen>
    <img src={BancoFalabella} alt="PlaceHolder" draggable={false} />
  </Imagen>
  <Texto>
    <b>Re-Diseño</b>
    <p>Diseñé con la metodología first mobile, eso hizo que...</p>
    <a href="#" draggable={false}>
      Pronto...
    </a>
  </Texto>
</Contenedor>

<Contenedor>
  <Imagen>
    <img src={Sense} alt="PlaceHolder" draggable={false} />
  </Imagen>
  <Texto>
    <b>Colores</b>
    <p>Elaboración de randomizer de colores para las páginas webs...</p>
    <a href="#" draggable={false}>
      Pronto...
    </a>
  </Texto>
</Contenedor>

<Contenedor>
  <Imagen>
    <img src={LittleLemon} alt="PlaceHolder" draggable={false} />
  </Imagen>
  <Texto>
    <b>E-Commerce</b>
    <p>Pequeña tienda donde se puede agregar al carrito, también...</p>
    <a href="#" draggable={false}>
      Pronto...
    </a>
  </Texto>
</Contenedor>

<Contenedor>
  <Imagen>
    <img src={BotDiscord} alt="PlaceHolder" draggable={false} />
  </Imagen>
  <Texto>
    <b>Bot Discord</b>
    <p>Reproducir música en los servidores, como también funciones...</p>
    <a href="#" draggable={false}>
      Pronto...
    </a>
  </Texto>
</Contenedor>

    </>
  );
};
export default Box;
