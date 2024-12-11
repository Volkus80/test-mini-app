import styled from "styled-components"
import { ContainerProps } from "./ContainerProps";
import { ThemedElement } from "@/types/themedElement";
import { useThemeProvider } from "@/hooks/useThemeProvider";

const StyledContainer = styled.div<ThemedElement>`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    // gap: 1.5rem;
    background: ${props => props.theme.$bg_color}
`;

const Container = ({ children }: ContainerProps) => {
    const { theme } = useThemeProvider();
    return <StyledContainer theme={theme}>
        {children}
    </StyledContainer>
}

export { Container }