import React from 'react'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo'


export const Header = () => {
    return (
        <StyledHeader>
            <Logo height='85%' width='85%' />
            <Menu items={['Home', 'Skills', 'Works', 'Contact']}  color={'white'}/>
            <BurgerMenu title={'BurgerMenu'}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    box-sizing: content-box;
    left: 10%;
    top: 0;
    width: 80%;
    height: 70px;
    z-index: 8;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    background-color: rgba(0,0,0,0.85);
    @media (width<=430px) {
    left: 0;
    width: 100%;
    }
`