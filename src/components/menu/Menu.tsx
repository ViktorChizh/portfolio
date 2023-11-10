import * as React from 'react';
import styled from 'styled-components';

export const Menu = () => {
    return (
        <StyledMenu>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/">Skills</a>
                </li>
                <li>
                    <a href="/">Works</a>
                </li>
                <li>
                    <a href="/">Testimony</a>
                </li>
                <li>
                    <a href="/">Contact</a>
                </li>
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
    }
`