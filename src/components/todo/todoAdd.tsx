import React, {ChangeEvent, FC, useState} from "react";


import {useToDoContext} from "../../context";


import {FlexWrapper,Button} from "../style";




export const TodoAdd: FC = () => {

    const [value, setValue] = useState<string>('')
    const {addTodo, logOut, user} = useToDoContext()

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
        <FlexWrapper justify={"space-between"} gap='20'>
            <FlexWrapper gap='20' align='center' background={"#7eb9dc"} padding='10px'>
                <input
                    value={value}
                    onChange={onChangeInput}
                />
                <Button onClick={add}> Add </Button>
            </FlexWrapper>
            <FlexWrapper gap={'20'} align='center' background={"#7eb9dc"} padding='10px'>
                <span>{user}</span>
                <Button onClick={() => logOut()}>Log Out</Button>
            </FlexWrapper>
        </FlexWrapper>

    )
}