import styled from "styled-components";

interface iElementProps{
    width?:string
    cursor?:string
}

export const ItemElement = styled.div<iElementProps>`
  background: #7eb9dc;
  padding: 5px 10px;
  width:${({width}) => width};
  cursor:${props => props.cursor};
`