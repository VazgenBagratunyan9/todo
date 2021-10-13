import React, {FC} from 'react';
//style
import {ThemeProvider} from "styled-components";
import {GlobalStyle, theme} from "./theme";

//components
import {Todo} from "./components/todo";
import {Login} from "./components/login";

//context
import {ContextProvider} from "./context";
import { STYLED } from './theme/components';




const App: FC = () => {
    return (
        <ContextProvider>
            <ThemeProvider theme={theme}>
                <GlobalStyle />
                <STYLED.FlexWrapper
                    width="100vw"
                    height="100vh"
                >
                    <Login />
                    <Todo />
                </STYLED.FlexWrapper>
            </ThemeProvider>
        </ContextProvider>
    )
}

export default App;
