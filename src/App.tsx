import React, {FC, useState} from 'react';

//components
import {Todo} from "./components/todo_list";

//types

import {ContextProvider} from "./context";


const App: FC = () => {
    return (
        <ContextProvider>
            <Todo/>
        </ContextProvider>
    )
}

export default App;
