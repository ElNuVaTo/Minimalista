import styled from "styled-components";
import { motion } from "framer-motion";

import MoonIcon from "@/assets/icons/dark/moon.svg";
import SunIcon from "@/assets/icons/light/sun.svg";
import { useState } from "react";

const Button = styled.button`
  background-color: #ddd;
  cursor: pointer;
  border-radius: 5px;
  padding: 3px 5px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 70px;
  position: relative;

  @media (min-width: 500px) {
    width: 80px;
  }

  justify-content: flex-start;
  &[data-isOpen="true"] {
    justify-content: flex-end;
  }
`;

const Seleccion = styled(motion.div)`
  background-color: #0a8b8467;
  height: 30px;
  width: 30px;
  border-radius: 50%;
`;

const Icono = styled.img`
  height: 30px;
  width: 30px;
  object-fit: cover;
  z-index: 2;
  border-radius: 50%;
  padding: 4px;

  &.Sun {
    position: absolute;
    right: 0;
  }
  &.Moon {
    position: absolute;
    left: 0;
  }
`;

const ThemeToggle = ({ toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
    toggleTheme();
  };

  return (
    <Button onClick={onClick}>
      <Container data-isOpen={isOpen} layout>
        <Icono src={MoonIcon} alt="" className="Moon" />
        <Seleccion layout />
        <Icono src={SunIcon} alt="" className="Sun" />
      </Container>
    </Button>
  );
};

export default ThemeToggle;
