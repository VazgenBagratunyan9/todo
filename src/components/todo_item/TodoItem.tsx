import {itodo} from "../../interfaces/TodoInterfaces";
import styled from "styled-components";

export const TodoItem = ({title}:itodo)=>{
    const Li = styled.li`
      font-size: 18px;
      border:1px solid black;
      padding: 5px 10px;
      border-radius: 5px;
    `

    return (
        <>
            <Li>{title}</Li>
            <Li>Edit</Li>
            <Li>Remove</Li>
        </>
    )
}

