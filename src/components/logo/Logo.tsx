import React from 'react'
import photo from 'assets/littleFoto.png'
import styled from 'styled-components'

type logoPropsType = {
    width?: string
    height?: string
}

export const Logo = (props: logoPropsType) => {
    return (
        <StyledLogo href='https://viktorchizh.github.io/portfolio/'>
            <img src={photo}
                alt='logo' 
                width={`${props.width}` || '75px'}
                height={`${props.height}` || '75px'}
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
        transform: scale(1.1);
        transition: 0.25s;
    }
`
