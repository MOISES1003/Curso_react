import styled from "styled-components";
import { Carousel } from "../Carousel";

export function About(){
    return(
        <Section id="about">
            <Container>
                <Box>
                   <Carousel/>
                </Box>      
            </Container>
        </Section>
    )
}

/**-------ESTILOS-------*/
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${(props)=>props.theme.text};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  `;
const Container = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 70em) {
        width: 85%;
    }
    @media (max-width: 64em) {
        flex-direction: column;
        width: 100%;
        &>*:last-child{
            width:80%;
        }
    }
    @media (max-width: 40em) {
        &>*:last-child{
            width:90%;
        }
    }
  `;
const Box = styled.div`
  width:50%;
  height: 100%;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 40em) {
    min-height: 50vh;
  }
`;