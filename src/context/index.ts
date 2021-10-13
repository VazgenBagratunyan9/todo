import {useContext} from "react";
import {ToDoContext} from "./todo";

export const useToDoContext = () => useContext(ToDoContext)

export {ContextProvider} from "./context"