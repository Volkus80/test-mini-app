import styled, {css, keyframes} from "styled-components"
import { Button } from "../button/Button";
import { useThemeProvider } from "@/hooks/useThemeProvider";
import { TypeShowMenu } from "@/types";

interface MenuContainerProps extends MenuProps{
    $bg_color: string   
}

interface MenuProps {
    $show: TypeShowMenu
}

const appear = keyframes ` to {left: 0}`;
const firstDisappear = keyframes ` to {left: -100%}`;
const disappear = keyframes `from {left: 0} to {left: -100%}`;

const MenuContainer = styled.div<MenuContainerProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    left: -100%;
    top: 0;
    display: flex;
    background: ${props => props.$bg_color};
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    gap: 20px;
    ${props => !props.$show.show && props.$show.renders > 0 ? css`
        animation-name: ${disappear};
        animation-duration: .5s;
        animation-fill-mode: forwards;
        ` : !props.$show.show ? css`
        animation-name: ${firstDisappear};
        animation-duration: .5s;
        animation-fill-mode: forwards;
        `
        : css`
        animation-name: ${appear};
        animation-duration: .5s;
        animation-fill-mode: forwards;
        `}
    
`;



const Menu = ({$show}: MenuProps) => {
    const {theme} = useThemeProvider();
    
    return <MenuContainer $show={$show} $bg_color={theme.$menu_bg}>
        <Button 
            $title="Page1"
            $theme={theme} 
            $width="100%"
            onClick={() => console.log('page1')}
            $text="Page1"
            />
        <Button 
            $title="Page1"
            $theme={theme} 
            $width="100%"
            onClick={() => console.log('page2')}
            $text="Page2"
            />
        <Button 
            $title="Page1"
            $theme={theme} 
            $width="100%"
            onClick={() => console.log('page3')}
            $text="Page3"
            />
        <Button 
            $title="Page1"
            $theme={theme} 
            $width="100%"
            onClick={() => console.log('page4')}
            $text="Page4"
            />
    </MenuContainer>
}

export {Menu}