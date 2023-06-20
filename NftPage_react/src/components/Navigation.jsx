import styled from "styled-components";
import { Logo } from "./Logo";
import { useState } from "react";

export function Navigation() {
    const [click , setClick] = useState(true);
  return (
    <Section>
      <NavBar>
        <Logo />
        <Menu click={click}>
            <MenuItem>
            hola
            </MenuItem>
        </Menu>
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
const Menu = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  @media (max-width: 64em) {
    position: fixed;
    top: ${(props) => props.theme.navHeight};
    left: 0;
    right: 0;
    bottom: 0;
    width: 100vw;
    background: ${(props)=>`rgba(${props.theme.bodyRgba},0.85)`};
    backdrop-filter: blur(2px);
    transform: ${(props)=>props.click? "translateY(0)":"translateY(1000%)"};
    transition: all 0.3s ease;
    flex-direction: column;
    justify-content: center;
    touch-action: none;


 }
`;

const MenuItem = styled.li`
margin: 0 1rem;
color: ${(props)=>props.theme.text};
cursor: pointer;
font-size: ${(props)=>props.theme.fontlg};
&::after{
    content: " ";
    display: block;
    width: 0%;
    height: 2px;
    background: ${(props)=>props.theme.text};
    transition: width 0.3s ease;
}
&:hover::after{
width: 100%;
}
@media (max-width: 64em) {
    margin: 1rem 0;
    font-size: ${(props)=>props.theme.fontmd};
    &::after{
        display: none;
    }
}
`;