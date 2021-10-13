import {createContext, FC, useEffect, useState} from 'react'
import uniqid from "uniqid";

import {iContext, itodo} from "../interfaces/todoInterfaces";

const defaultState: iContext = {
    todoData: [],
    user:'',
    changeTodo: () => {},
    removeTodo:() => {},
    addTodo:() => {},
    login:() => {},
    logOut:() => {}
};


export const ToDoContext = createContext<iContext>(defaultState)


export const ToDoProvider: FC = ({children}) => {
    const [user,setUser] = useState('')
    const [todoData, setTodoData] = useState([{id: '1', title: 'aaaa'}])

    useEffect(()=>{
        const user = localStorage.getItem('user')
        const data = localStorage.getItem('data')

        if(user){
            setUser(user)
        }
        if(data){
            setTodoData(JSON.parse(data))
        }

    },[])

    useEffect(()=>{
        localStorage.setItem('data',JSON.stringify(todoData))
    },[todoData])

    const changeTodo = (id:string,value:string)=>{
        const copyTodoData = [...todoData]
        const idx = copyTodoData.findIndex(item => item.id === id)
        copyTodoData[idx].title = value
        setTodoData(copyTodoData)
    }

    const addTodo = (value:string) => {
        setTodoData([...todoData,{id:uniqid(),title:value}])
    }

    const removeTodo = (id:string)=>{
        const data = todoData.filter(item => item.id !== id)
        setTodoData(data)
    }

    const login = (userName:string)=>{
        localStorage.setItem('user',userName)
        setUser(userName)
    }

    const logOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('data')
        setUser('')
        setTodoData([])
    }

    return (
        <ToDoContext.Provider value={{
            todoData,
            user,
            changeTodo,
            removeTodo,
            addTodo,
            login,
            logOut
        }}>
            {
                children
            }
        </ToDoContext.Provider>
    )
}