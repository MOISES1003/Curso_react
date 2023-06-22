import styled from "styled-components"

export function Button({text,link}){
    return(
        <a href={link} aria-label={text} target="_blank">
            <Btn>{text}</Btn>
         </a>    
        )
}

const Btn = styled.button`
  display: inline-block;
  background-color: ${(props)=>props.theme.text};
  color:${(props)=>props.theme.body};
  outline: none;
  border: none;
`;