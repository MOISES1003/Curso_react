import styled, { keyframes } from "styled-components";
import Vector from "../components/icons/Vector"


export function DrawSvg() {
  return (
    <>
      <Ball />
      <VectorContainer>
        <Vector/>
      </VectorContainer>
    </>
  );
}
//Animacion
const Bounce = keyframes`
    from{
        transform: translateX(-50%) scale(0.5);
    }to{
        transform: translateX(-50%) scale(1);
    }
`;
//Estilos
const Ball = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 1.5rem;
  height: 1.5rem;
  background-color: ${(props) => props.theme.text};
  border-radius: 50%;
  animation: ${Bounce} 0.5s linear infinite alternate;
  @media (max-width: 48em) {
    left: 1rem;
  }
`;
const VectorContainer = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 100%;
  overflow: hidden;
  svg {
    display: inline-block;
    width: 100%;
    height: 100%;
  }
`;
