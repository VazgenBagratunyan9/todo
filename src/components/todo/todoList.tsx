import React, {ChangeEvent, FC, useState} from "react";

import {useToDoContext} from "../../context";
import {STYLED} from "../../theme/components";
import {TodoItem} from "./todoItem";

export const TodoList:FC = ()=>{
    const {todoData} = useToDoContext()
    return (
       <STYLED.FlexWrapper direction="column">
           {
               todoData.map(({id,title})=>{
                   return <TodoItem
                       key={id}
                       id={id}
                       title={title}
                   />
               })
           }
       </STYLED.FlexWrapper>
    )
}

