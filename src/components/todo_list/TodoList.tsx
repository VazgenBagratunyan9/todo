import React, {FC, useContext, useState, useEffect} from "react";

import {TodoItem} from "../todo_item";
import styled from "styled-components";

import {Button,Input,List} from "../styled-components";
import {useToDoContext} from "../../context";

export const Todo:FC = ()=>{
    const [value,setValue] = useState<string>('')
    const [id,setID] = useState(1)
    const {todoData,changeTodo} = useToDoContext()


    const Block = styled.div`
      display: flex;
    `

    const addTodo = ()=>{
        if(!!value){
            setID((prev)=>++prev)
            changeTodo({id:id,title:value})
        }
    }

    console.log(todoData)

    return (
        <div className="todo_List">
            <Block>
                <Input
                    onChange={(e:React.ChangeEvent<HTMLInputElement>)=>
                        setValue(e.target.value)
                    }
                    value={value}
                />
                <Button onClick={addTodo}>Add</Button>
            </Block>

            <List>
                {
                    todoData.map(({id,title})=>{
                        return <TodoItem
                            key={id}
                            id={id}
                            title={title}
                        />
                    })
                }
            </List>
        </div>
    )
}

