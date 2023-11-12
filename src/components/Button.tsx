import styled from "styled-components";

type ButtonPropsType = {
    width?: string
    height?: string
    padding?: string
}

export const Button = styled.button<ButtonPropsType>`
    padding: ${props => props.padding};
    width: ${props => props.width};
    height:  ${props => props.height};
`