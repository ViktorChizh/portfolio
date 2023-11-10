import React from 'react'
import { Logo } from '../../components/logo/Logo'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'

export const Header = () => {
    return (
        <StyledHeader>
            <Logo />
            <Menu />
            <BurgerMenu />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgba(0,0,0, 0.25);
    height: 70px;
`