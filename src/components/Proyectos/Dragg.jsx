import styled from "styled-components";
import { motion } from "framer-motion";
import Box from "./Box";

const Draggeable = styled(motion.div)`
  overflow-x: auto;
  display: flex;
  gap: 30px;
  scroll-snap-type: x mandatory;


 /* Non-Standard, But More Styling-Capable Properties */
 &::-webkit-scrollbar {
    width: 8px;
    height: 8px; 
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 8px;
  }
  &::-webkit-scrollbar-track {
    background:  #ddd;
    border-radius: 8px;
  }

  /* Standardized Properties */
  @supports not selector(::-webkit-scrollbar) {
    scrollbar-color: gray #ddd;
    scrollbar-width: thin;
  }


`;

const Dragg = () => {
  return (
    <>
      <Draggeable>
        <Box />
      </Draggeable>
    </>
  );
};

export default Dragg;
