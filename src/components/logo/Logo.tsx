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
                width={`${props.width}` || '100%'}
                height={`${props.height}` || '100%'}
            />
        </StyledLogo>
    )
}

const StyledLogo = styled.a`

    /* width: 100vw;
    height: 100vw; */
    /* position: fixed;
    z-index: 9;
    left: 10%;
    top: 0; */
    img {
        border-radius: 0 50% 50% 50%;
        object-fit: cover;
    }
    &:hover {
        cursor: pointer;
    }
    @media (width<=430px) {
        /* left: 0; */
    }
`
