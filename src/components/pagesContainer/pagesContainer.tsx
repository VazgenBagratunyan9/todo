import React, {FC} from "react";
import {Login} from "../login";
import {Todo} from "../todo";
import {useAuthContext} from "../../context";
import {STYLED} from "../../theme/components";

export const PagesContainer: FC = () => {
    const {user} = useAuthContext()

    return (
        <STYLED.FlexWrapper
            width="100vw"
            height="100vh"
        >
            {!user && <Login/>}
            {user && <Todo/>}
        </STYLED.FlexWrapper>
    )
}