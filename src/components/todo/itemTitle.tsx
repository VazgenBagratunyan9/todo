import styled from "styled-components";
import {iItemTitle} from "../../interfaces/todoInterfaces";



export const ItemTitle = styled.li<iItemTitle>`
  flex:${({flex}) => flex};
  background: #7eb9dc;
  margin-bottom: 5px;
  padding: 5px 10px;
  width:${({width}) => width};
  cursor:${props => props.cursor};
`