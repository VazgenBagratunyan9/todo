import React,{ChangeEvent, FC, useState} from "react";

import {useAuthContext} from "../../context";
import {STYLED} from "../../theme/components";





export const Login:FC = ()=>{
    const [value,setValue] = useState<string>('')
    const {user,login} = useAuthContext()

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

        <STYLED.FlexWrapper width="100%" height="100%" justify="center" align="center">
            <STYLED.Form onSubmit={userLogin}>
                <label>
                    <STYLED.FlexWrapper direction="column">
                        Name
                        <input value={value} onChange={changeInput} />
                    </STYLED.FlexWrapper>
                </label>
                <STYLED.Button
                    align="flex-end"
                    color="#259bd3"
                    type="submit"
                >
                    Login
                </STYLED.Button>
            </STYLED.Form>
        </STYLED.FlexWrapper>
    )
}