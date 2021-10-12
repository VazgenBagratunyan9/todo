import {useContext} from "react";
import {ToDoContext} from "./Todo";

export const useToDoContext = () => useContext(ToDoContext)

export {ContextProvider} from "./context"