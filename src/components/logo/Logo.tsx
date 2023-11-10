import React from 'react'
import logo from '../../assets/logo.svg'

type logoPropsType = {
    width?: string
    height?: string
}

export const Logo = (props: logoPropsType) => {
    return (
        <a href='/'>
            <img src={logo} 
                alt='logo' 
                width={`${props.width}` || '50px'}
                height={`${props.height}` || '50px'}
            />
        </a>
    )
}
