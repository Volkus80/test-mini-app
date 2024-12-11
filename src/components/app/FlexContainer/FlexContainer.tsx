import styled from "styled-components";
import { FlexContainerProps } from "./FlexContainerProps";
import { css } from "@emotion/react";

const FlexContainer = styled.div<FlexContainerProps>`
    ${(props) => css`
        flex-direction: ${props.$fd}
        align-items: ${props.$ai}
        justify-content: ${props.$jc ? props.$jc : 'flex-start'}
        flex: ${props.$f ? props.$f : 'auto'}
        `}
`

export {FlexContainer}