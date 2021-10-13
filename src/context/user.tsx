import {createContext} from 'react'
import {iUserContext} from "../interfaces/todoInterfaces";


const defaultState:iUserContext  = {
    user:'',
    login:() => {},
    logOut:() => {}
};
export const ToDoContext = createContext<iUserContext>(defaultState)