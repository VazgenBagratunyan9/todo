import React, {FC} from 'react';
import {PagesContainer} from "./components/pagesContainer";
import {MyThemeProvider} from "./theme";
//context
import {ContextProvider} from "./context";
import { STYLED } from './theme/components';





const App: FC = () => {
    return (
        <ContextProvider>
            <MyThemeProvider>
                <PagesContainer />
            </MyThemeProvider>
        </ContextProvider>
    )
}

export default App;
