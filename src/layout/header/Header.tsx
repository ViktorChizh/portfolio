import React from 'react'
import { Menu } from 'components/Menu'
import styled from 'styled-components'
import { Theme } from 'stylesAndThemes/Theme'
import { Container } from 'components/Container'
import { Icon } from 'components/Icon'
import { Button } from 'components/Button'
import { animateScroll } from 'react-scroll'

export const Header = () => {
    return (
        <StyledHeader>
            <Container>
                <Button border='none' bgColor='transparent' height='50px' onClick={()=>{animateScroll.scrollToTop()}}>
                    <Icon iconId='react2' viewport='0 0 125 125'/>
                </Button>
                <Menu items={['Home', 'Skills', 'Quotes', 'Works', 'Contact']}  color={'rgb(200, 225, 250)'}/>
                <Button border='none' bgColor='transparent' height='50px' onClick={()=>{animateScroll.scrollToTop()}}>
                    <Icon iconId='redux2' viewport='0 0 125 125' fill={'rgb(200, 225, 250)'} />
                </Button>
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
    z-index: 8;
    background-color: ${Theme.colors.bgDark};
    ${Container} {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px;
`