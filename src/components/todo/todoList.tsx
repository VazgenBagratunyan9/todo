import React, {ChangeEvent, FC, useState} from "react";

import {useToDoContext} from "../../context";
import {FlexWrapper} from "../style";
import {TodoItem} from "./todoItem";

export const TodoList:FC = ()=>{
    const {todoData} = useToDoContext()
    return (
       <FlexWrapper direction="column">
           {
               todoData.map(({id,title})=>{
                   return <TodoItem
                       key={id}
                       id={id}
                       title={title}
                   />
               })
           }
       </FlexWrapper>
    )
}

