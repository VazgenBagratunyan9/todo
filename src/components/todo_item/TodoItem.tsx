import {itodo} from "../../interfaces/TodoInterfaces";
import {useToDoContext} from "../../context";
import {ItemElement} from "./itemElement";
import {ChangeEvent, FC, useState} from "react";
import {FlexWrapper} from "../flexWrapper/style";


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
        <FlexWrapper gap="5px" justify="center" maxW="500px">
            <ItemElement>{title}</ItemElement>
            <FlexWrapper direction="column">
                {!edit && <ItemElement cursor="pointer" onClick={changeEdit}>Edit</ItemElement>}

                {
                    edit &&
                    <>
                        <ItemElement cursor="pointer" onClick={handleClick}>Edit</ItemElement>
                        <input value={value} onChange={changeInput}/>
                    </>
                }
            </FlexWrapper>
            <ItemElement cursor="pointer" onClick={() => removeTodo(id)}>Remove</ItemElement>
        </FlexWrapper>
    )
}

