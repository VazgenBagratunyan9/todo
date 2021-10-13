import 'styled-components'

export interface itodo {
    id: string,
    title:string
}
export interface iUserContext {
    user:string,
    login:(userName:string)=> void,
    logOut:()=> void,
}

export interface iContext {
    todoData:itodo[] | [],
    changeTodo:(id:string,value:string) => void,
    removeTodo:(id:string) => void,
    addTodo:(value:string) => void,

}

export interface iButtonStyle  {
    color?:string,
    align?:'center' | 'flex-end'
}

export interface iFlexWrapperStyle{
    width?:string,
    height?:string,
    direction?:"row" | "column",
    justify?:"space-between" | "center" | 'space-around',
    align?:'flex-start'|"spaces-between" | "center" | 'space-around',
    padding?:string,
    gap?:string,
    maxW?:string,
    background?:string
}

export interface iItemTitle{
    width?:string
    cursor?:'pointer',
    flex?:string
}


