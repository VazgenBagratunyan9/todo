import {createContext, FC, useEffect, useState} from 'react'
import uniqid from "uniqid";

import {iContext, itodo} from "../interfaces/todoInterfaces";

const defaultState: iContext = {
    todoData: [],
    changeTodo: () => {},
    removeTodo:() => {},
    addTodo:() => {},
};


export const ToDoContext = createContext<iContext>(defaultState)


export const ToDoProvider: FC = ({children}) => {
    const [todoData, setTodoData] = useState([{id: '1', title: 'aaaa'}])

    useEffect(()=>{
        const user = localStorage.getItem('user')
        const data = localStorage.getItem('data')

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

    return (
        <ToDoContext.Provider value={{
            todoData,
            changeTodo,
            removeTodo,
            addTodo,
        }}>
            {
                children
            }
        </ToDoContext.Provider>
    )
}