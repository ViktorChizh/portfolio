import React from 'react'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'

export const Header = () => {
    return (
        <StyledHeader>
            <Menu items={['Home', 'Skills', 'Works', 'Quotes', 'Contact']}  color={'white'}/>
            <BurgerMenu title={'BurgerMenu'}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    /* box-sizing: content-box; */
    left: 0;
    top: 0;
    width: 100%;
    min-height: 50px;
    z-index: 8;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    img {
        position: fixed;
        top:0;    
        left:0;
    }
    background-color: rgba(0,0,0,0.85);
`