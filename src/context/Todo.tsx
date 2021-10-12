import {createContext, FC, useState} from 'react'
import uniqid from "uniqid";

import {iContext, itodo} from "../interfaces/TodoInterfaces";

const defaultState: iContext = {
    todoData: [],
    changeTodo: () => {},
    removeTodo:() => {},
    addTodo:() => {}
};


export const ToDoContext = createContext<iContext>(defaultState)


export const ToDoProvider: FC = ({children}) => {

    const [todoData, setTodoData] = useState([{id: '1', title: 'aaaa'}])

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
            addTodo
        }}>
            {
                children
            }
        </ToDoContext.Provider>
    )
}