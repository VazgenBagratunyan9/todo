import React, {ChangeEvent, FC, useState} from "react";


import {useAuthContext, useToDoContext} from "../../context";


import {STYLED} from '../../theme/components'




export const TodoAdd: FC = () => {

    const [value, setValue] = useState<string>('')
    const {addTodo} = useToDoContext()
    const {logOut, user} = useAuthContext()

    const add = () => {
        if (!!value.trim()) {
            addTodo(value)
            setValue('')
        }
    }

    const onChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    return (
        <STYLED.FlexWrapper justify={"space-between"} gap='20'>
            <STYLED.FlexWrapper gap='20' align='center' background={"#7eb9dc"} padding='10px'>
                <input
                    value={value}
                    onChange={onChangeInput}
                />
                <STYLED.Button onClick={add}> Add </STYLED.Button>
            </STYLED.FlexWrapper>
            <STYLED.FlexWrapper gap={'20'} align='center' background={"#7eb9dc"} padding='10px'>
                <span>{user}</span>
                <STYLED.Button onClick={() => logOut()}>Log Out</STYLED.Button>
            </STYLED.FlexWrapper>
        </STYLED.FlexWrapper>

    )
}