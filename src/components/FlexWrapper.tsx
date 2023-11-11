import styled from "styled-components";

type FlexWRapperPropsType = {
    width?: string
    height?: string
    direction?: string
    justify?: string
    align?: string
    alighContent?: string
    wrap?: string
    gap?: string
}

export const FlexWrapper = styled.div<FlexWRapperPropsType>`
    display: flex;
    flex-direction: ${props => props.direction};
    justify-content: ${props => props.justify};
    align-items: ${props => props.align};
    align-content: ${props => props.alighContent};
    flex-wrap: ${props => props.wrap};
    gap: ${props => props.gap};
    width: ${props => props.width};
    height: ${props => props.height};
`