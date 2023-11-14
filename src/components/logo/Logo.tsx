import React from 'react'
import foto from '../../assets/littleFoto.png'
import styled from 'styled-components'

type logoPropsType = {
    width?: string
    height?: string
}

export const Logo = (props: logoPropsType) => {
    return (
        <StyledLogo href='https://viktorchizh.github.io/portfolio/'>
            <img src={foto} 
                alt='logo' 
                width={`${props.width}` || '75px'}
                height={`${props.height}` || '75px'}
            />
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
        position: fixed;
        z-index: 7;
        top:0;    
        left:0;
    img {
        border-radius: 0 0 50% 50%;
        object-fit: cover;
    }
    &:hover {
        cursor: pointer;
    }
`
