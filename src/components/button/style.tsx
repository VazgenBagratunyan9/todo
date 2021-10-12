import styled from "styled-components";

export interface iStyleProps  {
    bgColor?:string,

}

export const ButtonStyled = styled.button<iStyleProps>`
  background: ${props => props.bgColor};
`