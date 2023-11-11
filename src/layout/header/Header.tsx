import React from 'react'
import { Logo } from '../../components/logo/Logo'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'


export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu items={['Home', 'Skills', 'Works', 'Contact']}  color={'white'}/>
            <BurgerMenu />
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    left: 10%;
    top: 0;
    width: 80%;
    z-index: 9;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(0,0,0);
    min-height: 70px;
`