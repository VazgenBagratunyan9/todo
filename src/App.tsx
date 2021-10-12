import React, {FC, useState} from 'react';
import styled,{ThemeProvider} from "styled-components";
import {GlobalStyle, todoTheme} from "./theme";
//components
import {Todo} from "./components/todo_list";

//types

import {ContextProvider} from "./context";


const App: FC = () => {
    return (
        <ContextProvider>
            <ThemeProvider theme={todoTheme}>
                <GlobalStyle />
                <Todo/>
            </ThemeProvider>
        </ContextProvider>
    )
}

export default App;
