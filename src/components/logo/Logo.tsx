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
                width={`${props.width}` || '50'}
                height={`${props.height}` || '50'}
            />
        </StyledLogo>
    )
}

const StyledLogo = styled.a`
    position: fixed;
    z-index: 9;
    left: 10%;
    top: 0;
    img {
        border-radius: 50%;
        object-fit: cover;
    }
    &:hover {
        cursor: pointer;
    }
    @media (width<=430px) {
        left: 0;
    }
`
