import styled from "styled-components";

export interface iStyleFlexWrapper{
    direction?:string,
    justify?:"spaces-between" | "center",
    align?:string
    gap?:string
    maxW?:string
}

export const FlexWrapper = styled.div<iStyleFlexWrapper>`
    display: flex;
    flex-direction:${props=>props.direction || 'row'};
    justify-content: ${props=>props.justify || 'stretch'};
    align-items: ${props=>props.align || 'stretch'};
    gap: ${props => props.gap || 'normal'};
    max-width: ${props => props.maxW || "auto"};
`