import {createContext, FC, useState} from 'react'


import {iContext, itodo} from "../interfaces/TodoInterfaces";

const defaultState: iContext = {
    todoData: [{id: 1, title: 'aaa'}],
    changeTodo: () => {
    }
};


export const ToDoContext = createContext<iContext>(defaultState)


export const ToDoProvider: FC = ({children}) => {
    const [todoData, setTodoData] = useState([{id: 1, title: 'aaaa'}])

    const changeTodo = (obj: itodo) => {
        setTodoData([...todoData])
    }
    return (
        <ToDoContext.Provider value={{
            todoData,
            changeTodo
        }}>
            {
                children
            }
        </ToDoContext.Provider>
    )
}