import React from 'react'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'
// import { Logo } from '../../components/logo/Logo'


export const Header = () => {
    return (
        <StyledHeader>
            {/* <Logo width='15%' height='15%'/> */}
            <Menu items={['Home', 'Skills', 'Works', 'Quotes', 'Contact']}  color={'white'}/>
            <BurgerMenu title={'BurgerMenu'}/>
        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    box-sizing: content-box;
    left: 75px;
    top: 0;
    width: calc(100% - 75px);
    height: 50px;
    z-index: 9;
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
    /* @media (width<=430px) {
    left: 0;
    width: 100%;
    } */
`