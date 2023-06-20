import styled from "styled-components";
import { Logo } from "./Logo";

export function Navigation() {
  return (
    <Section>
      <NavBar>
        <Logo/>
      </NavBar>
    </Section>
  );
}

/*---------------Estilos-----------------*/

//estilos de la seccion
const Section = styled.section`
  width: 100vw;
  /* height: 100vh; */
  background-color: ${(props) => props.theme.body};
`;
const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: ${(props) => props.theme.navHeight};
  margin: 0 auto;
  background: red;
`;
