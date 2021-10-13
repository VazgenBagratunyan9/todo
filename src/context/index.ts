import {useContext} from "react";
import {ToDoContext} from "./todo";
import {AuthContext} from "./auth";
import {Context} from "./context";

export const useToDoContext = () => useContext(ToDoContext)
export const useAuthContext = () => useContext(AuthContext)
export const useGlobalContext = () => useContext(Context)


export {ContextProvider} from "./context"