import styled, {css} from "styled-components";

import type { TypeButtonProps } from "./TypeButtonProps";

const StyledButton = styled.button<TypeButtonProps>`
    outline: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 10px;
    padding: 10px;
    margin: 0;
    transition: ease-in .3s;
    ${props => css`
        color: ${props.$theme.$button_text};
        background: ${props.$theme.$button_bg};
        border: ${props.$theme.$button_border + ' 2px solid'};
        border-radius: ${props.$round ? '50%' : '10px'};
        width: ${props.$width ? props.$width : 'auto'};
        title: ${props.$title}
        `};
            
    
    font-size: 1rem;
    &:focus {
        outline: none;
    }
    &:active {
        transform: scale(.9);
         outline: none;
    }
`;


const Button = ({onClick = () =>{}, ...props}: TypeButtonProps) => {
    return (
        <StyledButton
            onClick = {onClick}
            {...props}>
                {(props.$text && <p>{props.$text}</p>)}
                {(props.children && props.children)}
        </StyledButton>
    )
}

export {Button};