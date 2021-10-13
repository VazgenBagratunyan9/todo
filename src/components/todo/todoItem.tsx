import {itodo} from "../../interfaces/todoInterfaces";
import {useToDoContext} from "../../context";

import {ChangeEvent, FC, useState} from "react";

import {ItemTitle} from "./itemTitle";
import {FlexWrapper} from "../style";



export const TodoItem:FC<itodo>= ({id, title,children} ) => {
    const [edit, setEdit] = useState(false)
    const [value,setValue] = useState('')
    const {removeTodo, changeTodo} = useToDoContext()

    const changeInput = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    const changeEdit = ()=>{
        setEdit(prev => !prev)
    }

    const handleClick = ()=>{
        if(!!value){
            changeTodo(id,value)
            setValue('')
        }
        setEdit(prev => !prev)
    }

    return (
        <FlexWrapper gap="5">
            <ItemTitle flex={'80%'}>{title}</ItemTitle>
            {!edit && <ItemTitle cursor="pointer" onClick={changeEdit}>Edit</ItemTitle>}
            {
                edit &&
                <FlexWrapper align="flex-start" gap='5'>
                    <input value={value} onChange={changeInput}/>
                    <ItemTitle cursor="pointer" onClick={handleClick}>Edit</ItemTitle>
                </FlexWrapper>
            }
            <ItemTitle cursor="pointer" onClick={() => removeTodo(id)}>Remove</ItemTitle>
        </FlexWrapper>
    )
}

