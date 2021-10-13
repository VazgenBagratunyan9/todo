import {DefaultTheme} from 'styled-components'
import {COLORS} from "./colors";

declare module 'styled-components' {
    export interface DefaultTheme {
        background:string,
        radius:string,
        buttonColor: typeof COLORS
    }
}

export const theme:DefaultTheme = {
    background:"#e1e1e1",
    radius:'5px',
    buttonColor: COLORS,
}