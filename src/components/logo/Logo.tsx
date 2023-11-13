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
    img {
        border-radius: 50%;
        object-fit: cover;
    }
    &:hover {
        cursor: pointer;
    }
`
