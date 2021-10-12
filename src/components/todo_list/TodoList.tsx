import React, {ChangeEvent, FC, useState} from "react";
import {TodoItem} from "../todo_item";
import {useToDoContext} from "../../context";
import {Button} from '../button'
import {FlexWrapper} from "../flexWrapper/style";


export const Todo:FC = ()=>{
    const [value,setValue] = useState<string>('')
    const {todoData,addTodo} = useToDoContext()

    const add = ()=>{
        if(!!value){
            addTodo(value)
            setValue('')
        }
    }
    const onChangeInput =(e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    return (
        <div>
            <FlexWrapper justify="center">
                <input
                    value={value}
                    onChange={onChangeInput}
                />
                <Button
                    bgColor="#025020"
                    onClick={add}
                >
                    Add
                </Button>

            </FlexWrapper>

            <ul>
                {
                    todoData.map(({id,title})=>{
                        return <TodoItem
                            key={id}
                            id={id}
                            title={title}
                        />
                    })
                }
            </ul>

        </div>
    )
}

