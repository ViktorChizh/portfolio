import React from 'react'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu items={['Home', 'Skills', 'Works', 'Quotes', 'Contact']}  color={'white'}/>
            <BurgerMenu title={'BurgerMenu'}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    box-sizing: border-box;
    top: 0;
    width: 100%;
    max-width: 1200px;
    height: 50px;
    z-index: 8;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        position: absolute;
        top:0;    
        left:0;
    }
    background-color: rgba(0,0,0,0.85);
`