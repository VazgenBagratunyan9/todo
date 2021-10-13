import {createContext, FC} from "react";
import {ToDoProvider} from "./todo";
import {AuthProvider} from "./auth";

export const Context = createContext({})

export const ContextProvider:FC = ({children}) => {
    return(
        <Context.Provider value={{}}>
            <AuthProvider>
                <ToDoProvider>
                    {children}
                </ToDoProvider>
            </AuthProvider>
        </Context.Provider>
    )
}