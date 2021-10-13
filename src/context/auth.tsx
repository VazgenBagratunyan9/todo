import {FC} from "react";
import {createContext, useEffect, useState} from 'react'
import {iUserContext} from "../interfaces/todoInterfaces";
import {useToDoContext} from "./index";


const defaultState:iUserContext  = {
    user:'',
    login:() => {},
    logOut:() => {}
};
export const AuthContext = createContext<iUserContext>(defaultState)


export const AuthProvider:FC = ({children})=>{
    const [user,setUser] = useState('')
    const {todoData} = useToDoContext()

    useEffect(()=>{
        const user = localStorage.getItem('user')

        if(user){
            setUser(user)
        }
    },[])

    const login = (userName:string)=>{
        localStorage.setItem('user',userName)
        setUser(userName)
    }

    const logOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('data')
        setUser('')
    }
    return(
        <AuthContext.Provider value={{
            user,
            login,
            logOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}