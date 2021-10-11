
export interface itodo {
    id: number | string,
    title:string
}

export interface iContext {
    todoData:itodo[],
    changeTodo: (c:itodo) => void
}