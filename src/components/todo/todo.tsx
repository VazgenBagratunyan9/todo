import {FC, useEffect} from "react";

import {TodoAdd} from "./todoAdd";
import {TodoList} from "./todoList";


import {STYLED} from '../../theme/components'
import {useToDoContext} from "../../context";

export const Todo:FC = ()=>{
    const {} = useToDoContext()
    useEffect(()=>{

        return ()=>{

        }
    },[])
    return (
        <STYLED.FlexWrapper width="100%" direction="column" gap="20" padding='10px'>
            <TodoAdd />
            <TodoList />
        </STYLED.FlexWrapper>
    )
}