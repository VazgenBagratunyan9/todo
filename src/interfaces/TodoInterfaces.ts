import 'styled-components'

export interface itodo {
    id: string,
    title:string
}

export interface iContext {
    todoData:itodo[] | [],
    changeTodo:(id:string,value:string) => void
    removeTodo:(id:string) => void,
    addTodo:(value:string) => void
}



