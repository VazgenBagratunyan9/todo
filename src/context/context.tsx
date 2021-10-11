import {createContext, FC} from "react";
import {ToDoProvider} from "./Todo";

const Context = createContext({})

export const ContextProvider:FC = ({children}) => {
    return(
        <Context.Provider value={{}}>
            <ToDoProvider>
                {children}

            </ToDoProvider>
        </Context.Provider>
    )

}