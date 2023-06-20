import styled from "styled-components"

export function Navigation(){
    return(
        <Section>
            hola
        </Section>
    )
}   


/*---------------Estilos-----------------*/

//estilos de la seccion
const Section = styled.section`
width: 100vw;
/* height: 100vh; */
background-color: ${(props)=>props.theme.body};


`;
