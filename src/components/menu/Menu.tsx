import * as React from 'react';
import styled from 'styled-components'

type MenuPropsType = {
    items: string[]
    color?: string
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu color={props.color}>
            <ul>
                {props.items.map((item: string, index: number) => {
                    return(
                        <li key={index}>
                            <a href={item}>{item}</a>
                        </li>
                    )}
                )}
            </ul>
        </StyledMenu>
    )
}

type StyledMenuPropsType = {
    color?: string
}

const StyledMenu = styled.nav<StyledMenuPropsType>`
    width: 100%;
    flex-grow: 1;
    ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        padding: 0;
        flex-wrap: wrap;
        align-content: center;
        li a {
            color: ${props => props.color}
        }
    }
`