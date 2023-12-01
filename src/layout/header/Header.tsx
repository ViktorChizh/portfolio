import React from 'react'
import { BurgerMenu } from '../../components/burgerMenu/BurgerMenu'
import { Menu } from '../../components/menu/Menu'
import styled from 'styled-components'
import { Theme } from '../../stylesAndThemes/Theme'
import { Container } from '../../components/Container'
import { Icon } from '../../components/icon/Icon'
import { Button } from '../../components/Button'
import { animateScroll } from 'react-scroll'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Button border='none' padding='0px' bgColor='transparent' height='50px' onClick={()=>{animateScroll.scrollToTop()}}>
                    <Icon iconId='code' width='50' height='50' viewport='0 0 50 50'/>
                </Button>
                <Menu items={['Home', 'Skills', 'Quotes', 'Works', 'Contact']}  color={'rgb(200, 225, 250)'}/>
                <BurgerMenu title={'BurgerMenu'}/>
            </Container>

        </StyledHeader>
    )
}

const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 50px;
    z-index: 8;
    background-color: ${Theme.colors.bgDarck};
    ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        ${Button} {
            :hover {
            cursor: pointer;
        }
        }
    }
`