import React from 'react'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'


export const Header = () => {
    return (
        <StyledHeader>
            <Menu items={['Home', 'Skills', 'Works', 'Contact']}  color={'white'}/>
            <BurgerMenu title={'BurgerMenu'}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    left: 10%;
    top: 0;
    width: 80%;
    z-index: 8;
    margin: 0 auto;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: rgb(0,0,0);
    min-height: 70px;
    @media (width<=430px) {
    left: 0;
    width: 100%;
    }
`