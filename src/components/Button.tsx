import styled from "styled-components";
import {Theme} from 'stylesAndThemes/Theme';

type ButtonProps = {
    width?: string
    height?: string
    padding?: string
    bgColor?: string
    color?: string
    border?: string
    borderRadius?: string
    fontSize?: string
}

export const Button = styled.button<ButtonProps>`
    padding: ${props => props.padding};
    width: ${props => props.width};
    height:  ${props => props.height};
    background-color: ${props => props.bgColor || Theme.colors.iconPrimary};
    color: ${props => props.color || Theme.colors.iconSecondary};
    font-size: ${props => props.fontSize};
    border: ${props => props.border || `3px double ${Theme.colors.bgSecondary}`};
    border-radius: ${props => props.borderRadius || '7px'};
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
        cursor: pointer;
    }
`