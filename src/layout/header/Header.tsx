import React from 'react'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'
import { Theme } from '../../stylesAndThemes/Theme'

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu items={['Home', 'Skills', 'Quotes', 'Works', 'Contact']}  color={'rgb(200, 225, 250)'}/>
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
    background-color: ${Theme.colors.bgDarck};
`