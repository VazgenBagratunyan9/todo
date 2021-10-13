import React,{ChangeEvent, FC, useState} from "react";

import {useToDoContext} from "../../context";
import {FlexWrapper,Form,Button} from "../style";




export const Login:FC = ()=>{
    const [value,setValue] = useState<string>('')
    const {user,login} = useToDoContext()

    const changeInput = (e:ChangeEvent<HTMLInputElement>)=>{
        setValue(e.target.value)
    }

    const userLogin = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(!!value.trim()){
            login(value)
            setValue('')
        }
    }

    if(!!user) return null
    return (
        <FlexWrapper width="100%" height="100%" justify="center" align="center">
            <Form onSubmit={userLogin}>
                <label>
                    <FlexWrapper direction="column">
                        Name
                        <input value={value} onChange={changeInput} />
                    </FlexWrapper>
                </label>
                <Button
                    align="flex-end"
                    color="#259bd3"
                    type="submit"
                >
                    Login
                </Button>
            </Form>
        </FlexWrapper>
    )
}