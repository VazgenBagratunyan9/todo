import {DefaultTheme} from 'styled-components'
import {COLORS} from "./colors";

declare module 'styled-components' {
    export interface DefaultTheme {
        background:string,
        buttonColor: typeof COLORS
    }
}

export const todoTheme:DefaultTheme = {
    background:"#cecece",
    buttonColor: COLORS,
}