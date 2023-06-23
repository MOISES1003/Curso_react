import styled,{ThemeProvider} from "styled-components";
import { Carousel } from "../Carousel";
import { Button } from "../Button";
import { Dark } from "../../styles/Themes";

export function About() {
  return (
    <Section id="about">
      <Container>
        <Box>
          <Carousel />
        </Box>
        <Box>
          <Title>
            Bienvenido al club
            <br /> de los bichos raros
          </Title>
          <SubText>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
            fugit veniam corrupti, ducimus, itaque rerum, voluptatibus similique
            ad placeat velit fugiat? Nihil nemo sit illo nisi vitae accusamus
            nostrum numquam!
          </SubText>
          <SubtextoL>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa repudiandae aspernatur nostrum quas quae accusamus cumque in exercitationem porro illum doloribus obcaecati nobis, eligendi dicta omnis dolorem a minima commodi.
          </SubtextoL>
          <ButtonContainer>
            <ThemeProvider theme={Dark}>
                <Button text="Unirse a Discord" link="#"/>
            </ThemeProvider>
          </ButtonContainer>
        </Box>
      </Container>
    </Section>
  );
}

/**-------ESTILOS-------*/
const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background-color: ${(props) => props.theme.text};
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
    & > *:last-child {
      width: 80%;
    }
  }
  @media (max-width: 40em) {
    & > *:last-child {
      width: 90%;
    }
  }
`;
const Box = styled.div`
  width: 50%;
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
const Title = styled.h2`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 0 auto;

  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const SubText = styled.p`
  font-size: ${(props) => props.theme.fontlg};
  color: ${(props) => props.theme.body};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontmd};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontsm};
  }
`;
const SubtextoL = styled.p`
  font-size: ${(props) => props.theme.fontmd};
  color: ${(props)=>`rgba(${props.theme.bodyRgba},0.6)`};
  align-self: flex-start;
  width: 80%;
  margin: 1rem auto;
  font-weight: 400;
  @media (max-width: 64em) {
    width: 100%;
    text-align: center;
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontsm};
  }
  @media (max-width: 30em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;
const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  align-items: flex-start;
  @media (max-width: 64em) {
    width: 100%;
    a {
      margin: 0 auto;
    }
  }
`;