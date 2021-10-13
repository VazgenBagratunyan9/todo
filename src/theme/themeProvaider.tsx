import {FC} from "react";
import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "./global_style";
import {theme} from "./theme";

export const MyThemeProvider:FC = ({children})=>{
   return (
       <ThemeProvider theme={theme}>
          <GlobalStyle />
           {children}
       </ThemeProvider>
   )
}