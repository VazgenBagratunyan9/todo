import {FC} from "react";

import {TodoAdd} from "./todoAdd";
import {TodoList} from "./todoList";
import {useToDoContext} from "../../context";
import {FlexWrapper} from "../style";


export const Todo:FC = ()=>{
    const {user} = useToDoContext()

    if(!user) return null
    return (
        <FlexWrapper width="100%" direction="column" gap="20" padding='10px'>
            <TodoAdd />
            <TodoList />
        </FlexWrapper>
    )
}