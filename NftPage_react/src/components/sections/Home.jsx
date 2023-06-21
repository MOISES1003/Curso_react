import styled from "styled-components"
import { TypeWriterText } from "../TypeWriterText";



export function Home(){
    return(
        <Section id="home">
            <Container>
                <Box>
                <TypeWriterText/>
                </Box>
            </Container>
        </Section>
    )
}

/*------ESTILOS----- */
const Section = styled.section`
  min-height: ${(props)=> `calc(100vh-${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props)=>props.theme.body};
  
`;
const Container = styled.div`
    width: 75%;
    height: 80vh;
    margin: 0 auto;
    justify-content: center;
    align-items: center;
    @media (max-width: 64em) {
        width:85%;
    }
`;
const Box = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:center;

`;