import styled,{keyframes} from "styled-components";
import ImgReact from "../../assets/react.png";
import { Suspense, lazy } from "react";
import {Loading} from "../Loading";
const TypeWriterText = lazy(()=>import("../TypeWriterText"));
const CoverVideo = lazy(()=>import("../ConverVideo"))
export function Home() {
  return (
    <Section id="home">
      <Container>
        <Box>
          <Suspense fallback={<Loading/>}>
            <TypeWriterText />
          </Suspense>
          
        </Box>
        <Box>
          <Suspense fallback={<Loading/>}>
              <CoverVideo />
          </Suspense>   
        </Box>
        <Round>
        <img src={ImgReact} width={500} height={400} alt="React"/>
        </Round>
      </Container>
    </Section>
  );
}

/*------ESTILOS----- */
const Section = styled.section`
  min-height: ${(props) => `calc(100vh - ${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props) => props.theme.body};
`;
const Container = styled.div`
  width: 75%;
  height: 80vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 85%;
  }
  @media (max-width: 48em) {
    flex-direction: column-reverse;
    width: 100%;
    & > *:first-child {
      width: 100%;
      margin-top: 2rem;
    }
  }
`;
const Box = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const rotate = keyframes`
  100%{
    transform: rotate(1turn);
  }  
`;


const Round = styled.div`
  position: absolute;
  right: 90%;
  width: 7rem;
  img{
    width: 100%;
    height:auto;
    animation: ${rotate} 6s linear infinite reverse;
  }
  @media (max-width: 64em) {
    width:4em;
    height:4em;
    left: none;
    right: 2rem;
    bottom: 100%;
  }
  @media (max-width: 48em) {
            right: 1rem;
  }
`;
