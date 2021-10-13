import {itodo} from "../../interfaces/todoInterfaces";
import {useToDoContext} from "../../context";

import {ChangeEvent, FC, useState} from "react";

import {STYLED} from "../../theme/components";


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
        <STYLED.FlexWrapper gap="5">
            <STYLED.ItemTitle flex={'80%'}>{title}</STYLED.ItemTitle>
            {!edit && <STYLED.ItemTitle cursor="pointer" onClick={changeEdit}>Edit</STYLED.ItemTitle>}
            {
                edit &&
                <STYLED.FlexWrapper align="flex-start" gap='5'>
                    <input value={value} onChange={changeInput}/>
                    <STYLED.ItemTitle cursor="pointer" onClick={handleClick}>Edit</STYLED.ItemTitle>
                </STYLED.FlexWrapper>
            }
            <STYLED.ItemTitle cursor="pointer" onClick={() => removeTodo(id)}>Remove</STYLED.ItemTitle>
        </STYLED.FlexWrapper>
    )
}

