import styled from "styled-components"

export function Home(){
    return(
        <Section id="home">
            Seccion de Home
        </Section>
    )
}

/*------ESTILOS----- */
const Section = styled.section`
  min-height: ${(props)=> `calc(100vh-${props.theme.navHeight})`};
  width: 100vw;
  position: relative;
  background-color: ${(props)=>props.theme.body}
  
  `;
