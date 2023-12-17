import styled from "styled-components";

type ButtonPropsType = {
    width?: string
    height?: string
    padding?: string
    bgColor?: string
    color?: string
    border?: string
    borderRadius?: string
    fontSize?: string
}

export const Button = styled.button<ButtonPropsType>`
    padding: ${props => props.padding};
    width: ${props => props.width};
    height:  ${props => props.height};
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    font-size: ${props => props.fontSize};
    border: ${props => props.border};
    border-radius: ${props => props.borderRadius} 
`