// import { Box, Button, Container, Flex } from "@chakra-ui/react"
// import { ColorModeButton, useColorMode } from "../color-mode"

import { useThemeProvider } from "@/hooks/useThemeProvider"
import { TypeTheme } from "@/types"
import styled from "styled-components"
import { Button } from "./button/Button"
import { FaMoon } from "react-icons/fa6"
import { FaSun, FaList  } from "react-icons/fa"


const StyledHeader = styled.div<TypeTheme>`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;
    background: ${props => props.$bg_color};    
    border-bottom: ${props => props.$text_color + ' solid 2px'};
`;

type HeaderProps = {
    showMenu: () => void
}

export const Header = ({showMenu}: HeaderProps) => {
    const {setDarkTheme, setLightTheme, themeType, theme} = useThemeProvider();
    const toggleTheme = themeType === 'light' ? setDarkTheme : setLightTheme;
    const icon = themeType === 'light'
    ? <FaSun color={theme.$button_text} size="25px"/>
    : <FaMoon color={theme.$button_text} size="25px"/>

    return (
        <StyledHeader {...theme}>
            <Button onClick={showMenu} $theme={theme} $title="menu">
                <FaList color={theme.$button_text} size="25px"/>
            </Button>
            <Button onClick={toggleTheme} $theme={theme} $round $title="theme">
                {icon}
            </Button>
        </StyledHeader>
    )
}