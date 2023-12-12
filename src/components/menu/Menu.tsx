import * as React from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components'

type MenuPropsType = {
    items: string[]
    color?: string
    changeFilterValue: (value: string) => void
}

export const Menu: React.FC<MenuPropsType> = ({items, color, changeFilterValue}) => {
    return (
        <StyledMenu>
            <ul>
                {items.map((item: string, index: number) => {
                    return(
                        <li key={index}>
                            <NavLink 
                                to={item} 
                                smooth={true} 
                                spy={true} 
                                activeClass='active' 
                                color={color} 
                                onClick={() => {changeFilterValue(item)}}
                            >
                                {item}
                            </NavLink>
                        </li>
                    )}
                )}
            </ul>
        </StyledMenu>
    )
}

type StyledMenuPropsType = {
    color?: string
}

const StyledMenu = styled.nav`
    width: 80%;
    flex: 1 2;
        ul {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        list-style: none;
        padding: 0 5%;
        margin: 0;
        gap: 3%;
        flex-wrap: wrap;
    }
`
const NavLink = styled(Link)<StyledMenuPropsType>`
    color: ${props => props.color};
    &:hover {
        cursor: pointer;
    } 
    /* &.active{
        border: 1px solid ${props => props.color};
        border-radius: 5px;
        padding: 1px;
    } */
`