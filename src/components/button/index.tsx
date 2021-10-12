import {ButtonStyled, iStyleProps} from './style';

interface iProps extends iStyleProps{
    children:any,
    onClick:()=> void
}

export const Button = (props:iProps)=>{
    return <ButtonStyled {...props} />
}