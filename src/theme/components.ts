import styled from "styled-components";
import {iButtonStyle, iFlexWrapperStyle, iItemTitle} from "../interfaces/todoInterfaces";

export const STYLED = {
    FlexWrapper: styled.div<iFlexWrapperStyle>`
      width: ${({width}) => width};
      height: ${({height}) => height};
      display: flex;
      padding: ${({padding}) => padding};
      flex-direction: ${props => props.direction};
      justify-content: ${props => props.justify};
      align-items: ${props => props.align};
      gap: ${props => props.gap + 'px' || 'normal'};
      max-width: ${props => props.maxW || "auto"};
      background-color: ${props => props.background};
    `,

    Button: styled.button<iButtonStyle>`
      align-self: ${({align}) => align};
      background: ${props => props.color};
    `,

    Form: styled.form`
      display: flex;
      padding: 10px 20px;
      background: #9ea0ee;
      flex-direction: column;
      justify-content: space-between;
      gap: 10px;
    `,
    ItemTitle: styled.li<iItemTitle>`
      flex: ${({flex}) => flex};
      background: #7eb9dc;
      margin-bottom: 5px;
      padding: 5px 10px;
      width: ${({width}) => width};
      cursor: ${props => props.cursor};
    `
}