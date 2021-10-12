import {itodo} from "../../interfaces/TodoInterfaces";

import {useToDoContext} from "../../context";
import {ItemElement} from "./itemElement";
import {FC, useState} from "react";
import {FlexWrapper} from "../flexWrapper/style";


export const TodoItem:FC<itodo>= ({id, title,children} ) => {
    const [edit, setEdit] = useState(false)
    const {removeTodo, changeTodo} = useToDoContext()

    const changeEdit = ()=>{
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
                        <ItemElement cursor="pointer">Edit</ItemElement>
                        <input type="text"/>
                    </>
                }
            </FlexWrapper>
            <ItemElement cursor="pointer" onClick={() => removeTodo(id)}>Remove</ItemElement>
        </FlexWrapper>
    )
}

