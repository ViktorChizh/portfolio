import * as React from 'react';
import styled from 'styled-components'

type MenuPropsType = {
    items: string[]
}

export const Menu = (props: MenuPropsType) => {
    return (
        <StyledMenu>
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

const StyledMenu = styled.nav`
    width: 80%;
    ul {
        display: flex;
        flex-grow: 1;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        padding: 0;
        flex-wrap: wrap;
        align-content: center;
    }
`